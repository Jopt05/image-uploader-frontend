import Head from 'next/head'
import Loader from '../components/Loader'
import Uploader from '../components/Uploader'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image Uploader Challenge</title>
        <meta name="description" content="Challenge for DevChallenges" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>

      <div className={styles.Title}>
        <p>
          DevChallenges
        </p>
      </div>

      <div className={styles.Main}>
        {/* <Uploader /> */}
        {/* <Loader /> */}
        <div className={styles.Successful}>
          <p className={styles.Successful_Title}>
            Uploaded Successfully!
          </p>
          <img className={styles.Successful_Image} src='/devchallenges.png' />
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
      </div>
    </div>
  )
}
