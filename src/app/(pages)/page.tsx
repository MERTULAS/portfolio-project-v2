import styles from "../page.module.css";
import MainMenu from "@/components/MainMenu";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainMenu />
      </main>
    </div>
  );
}
