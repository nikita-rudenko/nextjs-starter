import styles from './Footer.module.css';

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  );
}

export default Footer;
