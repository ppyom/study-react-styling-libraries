import styles from './Card.module.css';

const Card = ({ image, title, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Card;
