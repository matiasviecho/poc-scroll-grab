'use client';
import { Item } from '../Item/Item';
import styles from './List.module.scss';
export const List = ({ items }) => {
  console.log('items:', items);
  if (!items || items.length === 0) return <div>No hay elementos</div>;
  return (
    <ul className={styles['list']}>
      {items.map((item, index) => {
        return (
          <li key={item.id || index + 100}>
            <Item content={item} />
          </li>
        );
      })}
    </ul>
  );
};
