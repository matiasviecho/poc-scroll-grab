import { List } from '@/components/List/List';
import styles from './page.module.scss'
import Link from 'next/link';
import Image from 'next/image';
export default async function Home({searchParams: {use = null}}) {
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    return json;
  }

  const isBig = use ? use.includes("big") : false;
  const data = await fetchData();
  return (
    <section className={styles['container']}>
      <header />
      <main>
        <List items={data} format={use}/>
      </main>
      <footer>        
       {!isBig  ? <Link href={'/?use=big'}>go bigger</Link> : <Link href={'/'}>go smaller</Link>}
      </footer>
      <Image
     src="/nextjs-github-pages/vercel.svg"
     alt="Vercel Logo"
     className={styles.vercelLogo}
     width={100}
     height={24}
     priority
   />
    </section>
  )
}
