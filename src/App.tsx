import { useRef } from "react";
import styles from "./App.module.css";
import floppy from "./assets/floppy.svg?no-inline";
import { Button } from "./components/button/button";
import { Card } from "./components/card/card";
import { Header } from "./components/header/header";
import { CardMock } from "./mock-data/mock";

function App() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };
  return (
    <>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.mainContent}>
        {CardMock.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
        <Button isSaved={true} handleClick={openDialog} />
      </main>
      <dialog ref={dialogRef} className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <svg aria-hidden="true" className={styles.svg} viewBox="0 0 39 39">
            <use href={`${floppy}#floppy`} />
          </svg>
          <p className={styles.modalText}>Вставьте дискету, чтобы продолжить</p>
        </div>
        <Button buttonText="Ok" handleClick={closeDialog} typeLike={false} />
      </dialog>
    </>
  );
}

export default App;
