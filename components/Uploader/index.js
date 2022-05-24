import styles from './Uploader.module.css'

export default function Uploader() {
    
    return (
        <div className={styles.Uploader}>
            <p className={`${styles.Uploader_Title} ${styles.hardColor}` }>
            Upload your image
            </p>
            <p className={styles.softColor}>
            File should be Jpeg, png...
            </p>
            <div className={styles.Uploader_Body}>
            <img src='/image.svg' />
            <p className={styles.softColor}>
                Drag & Drop your file here
            </p>
            </div>
            <p className={styles.softColor}>
            Or
            </p>
            <label className={styles.Button} htmlFor='upload-photo'>Choose a file</label>
            <input className={styles.HiddenInput} type='file' id='upload-photo'/>
        </div>
    )
  }
  