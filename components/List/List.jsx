'use client';
import { useRef, useState } from 'react';
import { Item } from '../Item/Item';
import styles from './List.module.scss';
export const List = ({ items }) => {
  const [active, isActive] = useState(false);
  const [initialScrollState, setInitialScrollState] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const ref = useRef();
  if (!items || items.length === 0) return <div>No hay elementos</div>;
  const handlePointerMove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!active) return;
    const mouseX = e.clientX;
    const scroll = initialScrollState - mouseX;
    const updateScroll = () => {
      ref.current.scrollLeft = currentPosition + scroll;
    };
    setTimeout(() => {
      requestAnimationFrame(updateScroll);
    }, 0);
  };
  return (
    <ul
      className={styles['list']}
      onMouseDown={(e) => {
        isActive(true);
        setInitialScrollState(e.clientX);
      }}
      onMouseUp={() => {
        isActive(false);
        setCurrentPosition(ref.current.scrollLeft);
      }}
      onMouseMove={(e) => handlePointerMove(e)}
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
