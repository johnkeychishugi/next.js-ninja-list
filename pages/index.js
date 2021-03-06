import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid temporibus dolores, voluptas quibusdam facilis? Aperiam corporis libero velit illum corrupti, quae ut amet debitis odio ipsa fugiat nam commodi.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit fuga aspernatur doloremque quos inv </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
    
  )
}
