'use client';
import { useRef, useState } from 'react';
import { Item } from '../Item/Item';
import styles from './List.module.scss';
export const List = ({ items }) => {
  const [active, isActive] = useState(false);
  const pointerMove = useRef();
  const ref = useRef();
  if (!items || items.length === 0) return <div>No hay elementos</div>;
  const handlePointerMove = (e) => {
    if (!active) return;
    //console.log('e:', e);
    //console.log('e.nativeEvent.offsetX:', e.nativeEvent.offsetX);
    const targetScrollLeft =
      ref.current.scrollLeft - e.nativeEvent.offsetX + 100;
    const updateScroll = () => {
      ref.current.scrollLeft = targetScrollLeft;
    };

    requestAnimationFrame(updateScroll);
  };
  return (
    <ul
      className={styles['list']}
      onPointerDown={(e) => {
        isActive(true);
      }}
      onPointerUp={() => isActive(false)}
      onPointerMove={(e) => handlePointerMove(e)}
      ref={ref}
    >
      {items.map((item, index) => {
        return (
          <li key={item.id || index + 100}>
            <Item
              number={index}
              title={item.title}
              body={item.body}
            />
          </li>
        );
      })}
    </ul>
  );
};
