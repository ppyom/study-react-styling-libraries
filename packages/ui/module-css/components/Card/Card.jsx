const Card = ({ image, title, content }) => {
  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default Card;
