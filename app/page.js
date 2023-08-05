import { List } from '@/components/List/List';
import styles from './page.module.scss'

export default async function Home() {
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    return json;
  }
  const data = await fetchData();
  return (
    <section className={styles['container']}>
      <header />
      <main>
        <List items={data}/>
      </main>
      <footer />
    </section>
  )
}
