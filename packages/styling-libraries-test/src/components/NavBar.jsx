import { Link } from 'react-router-dom';
import { routes } from '../routes.js';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      {routes.map(({ pathname, title }) => (
        <Link key={`nav_${pathname}`} to={pathname}>
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
