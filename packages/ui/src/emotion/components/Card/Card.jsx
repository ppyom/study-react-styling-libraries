import { css } from '@emotion/react';
import { colors } from '../../color';

const Card = ({ image, title, content }) => {
  return (
    <div css={cardStyle}>
      <div css={imageWrap}>
        <img src={image} alt={title} />
      </div>
      <p css={css([commonStyle, titleStyle])}>{title}</p>
      <p css={css([commonStyle, contentStyle])}>{content}</p>
    </div>
  );
};

const cardStyle = css`
  max-width: 300px;
  overflow: hidden;
  border: 1px solid ${colors.black}22;
  border-radius: 0.5rem;
  &:hover img {
    scale: 1.2;
  }
`;
const imageWrap = css`
  overflow: hidden;
  position: relative;
  padding-top: 70%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s;
  }
`;
const commonStyle = css`
  padding: 0 1rem;
`;
const titleStyle = css`
  font-size: 1.1rem;
  font-weight: bold;
`;
const contentStyle = css`
  padding-bottom: 1rem;
`;

export default Card;
