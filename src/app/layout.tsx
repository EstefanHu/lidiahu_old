import Link from 'next/link';
import './globals.css';
import styles from './layout.module.scss';

export const metadata = {
  title: 'Lidia Hu',
  description: 'Stories by Lidia',
  keywords: ['Story', 'Writing', 'Book'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={styles.body}>
        <header>
          <Link href='/'>
            <h1>Lidia</h1>
          </Link>

          <nav>
            <Link href='/posts'>posts</Link>
            <Link href='/gallery'>gallery</Link>
            <Link href='/bio'>bio</Link>
            <Link href='/contact'>contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
