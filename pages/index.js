import Head from 'next/head'
import Loader from '../components/Loader'
import Successful from '../components/Successful'
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
        <Uploader />
        {/* <Loader /> */}
        {/* <Successful /> */}
      </div>
    </div>
  )
}
