import { List } from '@/components/List/List';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
export default async function Home() {
  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();
    return json;
  };
  const data = await fetchData();
  return (
    <section className={styles['container']}>
      <header />
      <main>
        <List items={data} />
      </main>
      <footer>
        <Link href={'/big'}>go bigger</Link>
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
  );
}
