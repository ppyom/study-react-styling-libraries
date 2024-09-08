import styled from 'styled-components';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

const StyledComponent = () => {
  return (
    <main>
      <h2>Styled Component</h2>
      <p>
        CSS를 JS 내부에서 사용할 수 있고, 이를 모듈 형태로 만들어주는
        라이브러리입니다.
      </p>
      <Section>
        <H3>컴포넌트</H3>
        <Article>
          <h4>버튼</h4>
          <Button>버튼입니다</Button>
        </Article>
        <Article>
          <h4>카드</h4>
          <Card
            image="https://github.com/ppyom.png"
            title="GitHub"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit rutrum dolor ut dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus."
          />
        </Article>
      </Section>
    </main>
  );
};

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const H3 = styled.h3`
  width: 100%;
`;
const Article = styled.article`
  flex: 1;
`;

export default StyledComponent;
