import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./QuoteText.module.scss";

export function QuoteText({ apiQuoteText }: { apiQuoteText: string }) {
  return (
    <>
      <div className={styles.quoteText}>
        <FontAwesomeIcon
          icon={faQuoteRight}
          size="lg"
          className={styles.quoteIcon}
        />
        <span className={apiQuoteText.length > 100 ? styles.longQuote : ""}>
          {apiQuoteText}
        </span>
      </div>
    </>
  );
}
