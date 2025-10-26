import styles from "./page.module.css";

import { LighterToggle } from "../components/LighterToggle";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <LighterToggle />
      </section>
    </main>
  );
}
