import styles from './Loader.module.css'

export default function Loader() {
    
    return (
        <div className={styles.Loader}>
          <p className={styles.Loader_Title}>
            Uploading...
          </p>
          <div className={styles.Loader_Container}>
            <div className={styles.Loader_Bar}>
            </div>
          </div>
        </div>
    )
  }
  