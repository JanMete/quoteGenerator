import { useState } from "react";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./Buttons.module.scss";

export function Buttons({ apiQuoteAuthor, apiQuoteText, fetchQuote }) {
  const [isHovered, setIsHovered] = useState(false);

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${apiQuoteText} - ${apiQuoteAuthor}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <>
      <div className={styles.buttonsContainer}>
        <Button
          color="default"
          className={styles.btn}
          title="Post it!"
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          onClick={tweetQuote}
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            style={{ color: isHovered ? "#38a1f3" : "#000000" }}
            size="2x"
          />
        </Button>
        <Button color="default" className={styles.btn} onClick={fetchQuote}>
          New Quote
        </Button>
      </div>
    </>
  );
}
