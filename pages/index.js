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

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
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
