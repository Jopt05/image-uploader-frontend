import Head from 'next/head'
import { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import Successful from '../components/Successful'
import Uploader from '../components/Uploader'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(null);
  const [message, setMessage] = useState(null);

  function handleSetFile(files) {
    let file = files[0];

    if ( !file ) return;

    setFile(file);
  }

  useEffect(() => {
    if( !file ) return;

    let formData = new FormData();

    formData.append('archivo', file);

    setLoading(true);

    fetch( process.env.NEXT_PUBLIC_API_URL, {
      method: 'POST',
      body: formData
    })
      .then((r) => r.json())
      .then((r) => {
        if( r.msg ) {
          setMessage( r.msg );
          setLoading( false );
          return
        }
        if( !r.url ) return;
        setUrl(r.url)
        setLoading(false)
        setMessage( null );
      })
      .catch((e) => console.error(e));

  }, [file])

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
        { (!file || (file && message)) && (
          <Uploader 
            dropHandler={handleSetFile}
            extraData={message}
          />
        ) }
        { 
          (file && loading) && (
            <Loader />
          )
        }
        {
          (file && !loading && url) && (
            <Successful 
              data={url}
            />
          )
        }
      </div>
    </div>
  )
}
