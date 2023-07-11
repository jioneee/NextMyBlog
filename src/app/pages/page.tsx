import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Blog
          <code className={styles.code}></code>
        </p>
      </div>
    </main>
  );
}
