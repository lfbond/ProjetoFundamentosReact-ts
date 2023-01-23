import styles from './Header.module.css';
import logo from '../assets/logo/logo.svg';

export function Header() {
  return (
    <header className={styles.header}> 
      <img src={ logo } alt="Logo do Ignite" />
      <p className= {styles.logoTitle}>Ignite Feed</p>
    </header>
  );
}