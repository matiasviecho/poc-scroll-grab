import style from './Item.module.scss';

export const Item = ({ number, title, body }) => {
  if (!title && !body) return null;
  return (
    <div
      className={`${style['item-container']} ${
        number === 50 ? style['fifty-test'] : ''
      }`}
    >
      {title && (
        <header>
          <span>{title}</span>
        </header>
      )}
      {body && (
        <main>
          <span>{body}</span>
        </main>
      )}
    </div>
  );
};
