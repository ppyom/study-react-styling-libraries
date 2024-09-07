import './index.css';
import Card from './components/Card';
import Button from './components/Button';

const NativeCss = () => {
  return (
    <main>
      <h2>NativeCSS</h2>
      <p>라이브러리나 프레임워크를 사용하지 않는 기본 CSS 입니다.</p>
      <section className="section">
        <h3>컴포넌트</h3>
        <article>
          <h4>버튼</h4>
          <Button>버튼입니다</Button>
        </article>
        <article>
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

export default NativeCss;
