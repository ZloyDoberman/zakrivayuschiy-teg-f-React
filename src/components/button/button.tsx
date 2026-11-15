import floppy from "../../assets/floppy.svg?no-inline";
import styles from "./button.module.css";

type TButton = {
  isSaved?: boolean;
  handleClick?: () => void;
  buttonText?: string;
  typeLike?: boolean;
  isLiked?: boolean;
};

export const Button = ({
  isSaved = false,
  handleClick,
  buttonText = "Like",
  typeLike = true,
  isLiked,
}: TButton) => {
  buttonText = isLiked ? "Unlike" : buttonText;
  return (
    <button
      className={`${styles.button} ${!typeLike && styles.noLike} ${isSaved && styles.savedBtn}`}
      onClick={handleClick}
    >
      {isSaved && (
        <svg aria-hidden="true" className={`${styles.svg}`} viewBox="0 0 39 39">
          <use href={`${floppy}#floppy`} />
        </svg>
      )}
      <span className={styles.buttonText}>
        {isSaved ? "Сохранить на память" : buttonText}
      </span>
    </button>
  );
};
