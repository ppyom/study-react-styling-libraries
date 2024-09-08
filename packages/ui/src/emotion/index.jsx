/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

const Emotion = () => {
  return (
    <main>
      <h2>Emotion</h2>
      <p>
        CSS를 JS 내부에서 사용할 수 있고, 이를 컴포넌트 형태로 사용할 수 있게
        만들어주는 라이브러리입니다.
      </p>
      <section
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <h3 css={css({ width: '100%' })}>컴포넌트</h3>
        <article
          css={css`
            flex: 1;
          `}
        >
          <h4>버튼</h4>
          <Button>버튼입니다</Button>
        </article>
        <article
          css={css`
            flex: 1;
          `}
        >
          <h4>카드</h4>
          <Card
            image="https://github.com/ppyom.png"
            title="GitHub"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit rutrum dolor ut dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus."
          />
        </article>
      </section>
    </main>
  );
};

export default Emotion;
