import './index.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

const TailwindCss = () => {
  return (
    <main>
      <h2>TailwindCSS</h2>
      <p>스타일 작성을 쉽게 할 수 있도록 도와주는 라이브러리니다.</p>
      <section className="flex flex-wrap">
        <h3 className="w-full">컴포넌트</h3>
        <article className="flex-1">
          <h4>버튼</h4>
          <Button>버튼입니다</Button>
        </article>
        <article className="flex-1">
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

export default TailwindCss;
