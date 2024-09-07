import Button from './components/Button/Button';
import Card from './components/Card/Card';
import './index.css';
import styles from './HomePage.module.css';

const ModuleCSS = () => {
  return (
    <main>
      <h2>ModuleCSS</h2>
      <p>CSS를 모듈단위로 사용하는 방식입니다.</p>
      <section className={styles.section}>
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

export default ModuleCSS;
