import styled from 'styled-components';
import { colors } from '../../color';

const CardContainer = styled.div`
  max-width: 300px;
  overflow: hidden;
  border: 1px solid ${colors.black}22;
  border-radius: 0.5rem;
  &:hover img {
    scale: 1.2;
  }
`;
const ImageWrap = styled.div`
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
const CommonStyle = styled.p`
  padding: 0 1rem;
`;
const Title = styled(CommonStyle)`
  font-size: 1.1rem;
  font-weight: bold;
`;
const Content = styled(CommonStyle)`
  padding-bottom: 1rem;
`;

export { CardContainer, ImageWrap, Title, Content };
