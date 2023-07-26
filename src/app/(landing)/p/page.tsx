import Link from 'next/link';
import styles from './post.module.scss';

const POSTS = [
  {
    title: 'extended peace',
    url: '/extended-peace',
    description: 'marie goes for a hike',
    category: 'short story',
    date: 'Mon Jun 19',
  },
  {
    title: 'Weathered Basket',
    url: '/weathered-basket',
    description: 'add description/synopsis here',
    category: 'short story',
    date: 'Tue Jul 25',
  },
];

export default function Posts() {
  return (
    <>
      {POSTS.map(({ title, url, description, category, date }) => (
        <Link key={title} href={`/p/${url}`}>
          <div className={styles.post}>
            <p className={styles.header}>
              <span>{category}</span> - {date}
            </p>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
