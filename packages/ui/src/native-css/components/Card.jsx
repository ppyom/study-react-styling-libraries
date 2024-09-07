import '../styles/Card.css';

const Card = ({ image, title, content }) => {
  return (
    <div className="Card">
      <div className="image-wrap">
        <img src={image} alt={title} />
      </div>
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </div>
  );
};

export default Card;
