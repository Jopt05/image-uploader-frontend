import styles from './Successful.module.css'

export default function Successful() {

    return (
        <div className={styles.Successful}>
          <p className={styles.Successful_Title}>
            Uploaded Successfully!
          </p>
          <img className={styles.Successful_Image} src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
          <div className={styles.Successful_Container}>
            <div className={styles.Successful_Link}>
              <p>
                https://www.youtube.com/watch?v=bKaHKDUIXgo&ab_channel=CajadePeliculas
              </p>
            </div>
            <button className={styles.Button}>
              Copy
            </button>
          </div>
        </div>
    )
}