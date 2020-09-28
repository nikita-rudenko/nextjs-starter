import styles from './Card.module.css';

type Props = {
  href: string;
  title: string;
  description: string;
};

function Card({ href, title, description }: Props): JSX.Element {
  return (
    <a href={href} className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}

export default Card;
