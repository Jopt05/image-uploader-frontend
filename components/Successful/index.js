import Link from 'next/link'
import styles from './Successful.module.css'
import { useState } from 'react';

export default function Successful(props) {

  const [copied, setCopied] = useState(false);

  function handleCopy(e) {
    e.preventDefault();
    navigator.clipboard.writeText(props.data);
    setCopied(true)
  }

    return (
        <div className={styles.Successful}>
          <p className={styles.Successful_Title}>
            Uploaded Successfully!
          </p>
          <img className={styles.Successful_Image} src={props.data} />
          <div className={styles.Successful_Container}>
            <div className={styles.Successful_Link}>
                <a 
                  href={props.data}
                  target='_blank'
                >
                  { props.data }
                </a>
            </div>
            <button 
              className={`${styles.Button} ${copied ? styles.Copied : ''}`}
              onClick={handleCopy}
            >
              {
                copied
                  ? 'Copied!'
                  : 'Copy'
              }
            </button>
          </div>
        </div>
    )
}