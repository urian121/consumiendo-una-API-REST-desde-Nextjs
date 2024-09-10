import styles from "./page.module.css";

import DataPage from "./components/DataPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="fw-bold mt-5 ">Lista de Usuarios</h1>
      <DataPage />
    </main>
  );
}
