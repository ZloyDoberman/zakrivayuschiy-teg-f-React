import { useState } from "react";
import { Button } from "../button/button";
import { Heart } from "../buttonHeart/buttonHeart";
import styles from "./card.module.css";

export type TCard = {
  titleCard: string;
  imgSrc: string;
  imgAlt: string;
  label: string;
  content: string;
  quoteUrl: string;
  quoteContent: string;
  quoteAuthor: string;
  filter:
    | "hue_rotate"
    | "sepia"
    | "invert"
    | "none"
    | "saturate"
    | "grayscale"
    | "blur";
};

export const Card = ({
  titleCard,
  imgSrc,
  imgAlt,
  label,
  content,
  quoteUrl,
  quoteContent,
  quoteAuthor,
  filter = "none",
}: TCard) => {
  const [like, setLike] = useState<boolean>(false);
  return (
    <article className={styles.card}>
      <h2 className={styles.titleCard}>{titleCard}</h2>
      <figure className={styles.cardContainerImg}>
        <img
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
          className={`${styles.cardImg} ${styles[filter]}`}
        />
        <figcaption className={styles.label} aria-hidden="true">
          &lt;{label}&gt;
        </figcaption>
      </figure>
      <div className={styles.cardBottom}>
        <p className={styles.cardContent}>{content}</p>
        <blockquote cite={quoteUrl}>
          <p className={styles.cardContent}>{quoteContent}</p>
          <p className={`${styles.cardContent} ${styles.quote}`}>
            {quoteAuthor}
          </p>
        </blockquote>
        <div className={styles.buttonContainer}>
          <Heart isLiked={like} handleClick={() => setLike(!like)} />
          <Button isLiked={like} handleClick={() => setLike(!like)} />
        </div>
      </div>
    </article>
  );
};
