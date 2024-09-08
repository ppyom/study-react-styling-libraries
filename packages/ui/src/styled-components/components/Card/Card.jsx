import { CardContainer, Content, ImageWrap, Title } from './style';

const Card = ({ image, title, content }) => {
  return (
    <CardContainer>
      <ImageWrap>
        <img src={image} alt={title} />
      </ImageWrap>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </CardContainer>
  );
};

export default Card;
