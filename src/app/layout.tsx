import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.scss';
import { GrGallery, GrContact } from 'react-icons/gr';
import { SlUserFemale } from 'react-icons/sl';
import { LuLayoutDashboard } from 'react-icons/lu';

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
            <Link href='/p'>posts</Link>
            <Link href='/bio'>bio</Link>
            <Link href='/contact'>contact</Link>
          </nav>

          <Link href='/' className={styles.favicon}>
            <Image src='/favicon.ico' alt='favicon' width='18' height='18' />
          </Link>
        </header>

        {children}

        <nav className={styles.mobileNavigation}>
          <Link href='/p'>
            <LuLayoutDashboard />
          </Link>

          <Link href='/bio'>
            <SlUserFemale />
          </Link>

          <Link href='/contact'>
            <GrContact />
          </Link>
        </nav>
      </body>
    </html>
  );
}
