import Card from '@components/Card';

import styles from './CardsGrid.module.css';

type Card = {
  href: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation 📄',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn 💡',
    description: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    href: 'https://github.com/vercel/next.js/tree/master/examples',
    title: 'Examples 🧩',
    description: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    href: 'https://vercel.com/import?filter=next.js',
    title: 'Deploy ✨',
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
];

function CardsGrid(): JSX.Element {
  return (
    <div className={styles.grid}>
      {cards.map(({ href, title, description }) => {
        return (
          <Card
            key={title}
            href={href}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
}

export default CardsGrid;
