import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>&lt;/HTML&gt;</h1>
      <p className={styles.headerSubTitle}>закрывающий тег</p>
    </div>
  );
};
