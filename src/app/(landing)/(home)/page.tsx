import Story from '@/components/Story';
import hero from './hero.module.scss';

export default function Home() {
  return (
    <>
      <section className={hero.hero}>
        <h1>I will extend peace to her like a river</h1>
        <p>- Isaiah 66:12</p>
      </section>

      <Story />
    </>
  );
}
