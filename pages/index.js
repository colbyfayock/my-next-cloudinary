import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url';
import styles from '../styles/Home.module.css'

export default function Home() {
  const url = buildUrl('galaxy_ne5p8f', {
    cloud: {
      cloudName: 'fay',
    },
    transformations: {
      effect: {
        name: 'pixelate',
        value: 40
      }
    }
  });

  const urlBlurred = buildUrl('galaxy_ne5p8f', {
    cloud: {
      cloudName: 'fay',
    },
    transformations: {
      effect: "blur:1000",
      quality: 1
    }
  });

  const [image, setImage] = useState();

  useEffect(() => {
    setTimeout(() => {
      setImage(url);
    }, 2000)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Out of this world!
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Image
              src="/galaxy.jpg"
              alt="Galaxy"
              width={1000}
              height={750}
            />
            <h3>Local Image</h3>
          </div>

          <div className={styles.card}>
            <Image
              src="https://res.cloudinary.com/fay/image/upload/v1617047570/galaxy_ne5p8f.jpg"
              alt="Galaxy"
              width={1000}
              height={750}
            />
            <h3>Cloudinary - Static</h3>
          </div>

          <div className={styles.card}>
            <Image
              src={url}
              alt="Galaxy"
              width={1000}
              height={750}
            />
            <h3>Cloudinary - Dynamic</h3>
          </div>

          <div className={styles.card}>
            <div style={{
              position: 'relative',
              height: 0,
              paddingTop: `${( 750 / 1000 ) * 100}%`,
              backgroundImage: `url(${urlBlurred})`,
              backgroundPosition: 'center center',
              backgroundSize: `100%`
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0
              }}>
                {image && (
                  <Image
                    src={image}
                    alt="Galaxy"
                    width={1000}
                    height={750}
                  />
                )}
              </div>
            </div>
            <h3>Cloudinary - Blurred Placeholder</h3>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
