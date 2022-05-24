import styles from './Uploader.module.css'
import { useRef, useEffect, useState } from 'react'

export default function Uploader(props) {

    const uploader = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [dragCounter, setDragCounter] = useState(0);

    function stopPropagation(event) {
        event.preventDefault()
        event.stopPropagation()
    }

    function handleDrag(e) {
        stopPropagation(e);
    }

    function handleDragIn(e) {
        stopPropagation(e)
        setDragCounter( dragCounter + 1 )
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsDragging(true)
        }
    }

    function handleDragOut(e) {
        stopPropagation(e)
        setDragCounter( dragCounter - 1 )
        if ( dragCounter > 0 ) return;
        setIsDragging(false)
    }

    function handleDrop(e) {    
        stopPropagation(e)
        setIsDragging(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            props.dropHandler(e.dataTransfer.files)
            e.dataTransfer.clearData()
            setDragCounter(0);
        }
    }

    useEffect(() => {
        setDragCounter(0)
        let div = uploader.current
        div.addEventListener('dragenter', handleDragIn)
        div.addEventListener('dragleave', handleDragOut)
        div.addEventListener('dragover', handleDrag)
        div.addEventListener('drop', handleDrop)
    }, [uploader])
    
    return (
        <div className={styles.Uploader}>
            <p className={`${styles.Uploader_Title} ${styles.hardColor}` }>
            Upload your image
            </p>
            <p className={styles.softColor}>
            File should be Jpeg, png...
            </p>
            <div ref={uploader} className={`${styles.Uploader_Body} ${isDragging ? styles.Uploading : ''}`}>
                <img src='/image.svg' />
                <p className={styles.softColor}>
                    Drag & Drop your file here
                </p>
            </div>
            {
                props.extraData && (
                    <p className={styles.Error}>
                        {props.extraData}
                    </p>
                )
            }
            <p className={styles.softColor}>
            Or
            </p>
            <label className={styles.Button} htmlFor='upload-photo'>Choose a file</label>
            <input 
                className={styles.HiddenInput} 
                type='file' 
                id='upload-photo'
                onChange={(e) => props.dropHandler(e.target.files)}
            />
        </div>
    )
  }
  