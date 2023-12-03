import React, { useState, useEffect } from "react";
import { Card, CardBody, Spinner } from "@nextui-org/react";
import { Buttons } from "../Buttons/Buttons";
import { QuoteText } from "../QuoteText/QuoteText";
import styles from "./QuoteContainer.module.scss";

const initialState = {
  apiQuoteText: "",
  apiQuoteAuthor: "",
  loading: true,
};

const QuoteContainer: React.FC = () => {
  const [state, setState] = useState(initialState);

  const fetchQuote = async () => {
    const apiUrl =
      "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
      const response = await fetch(apiUrl);
      const quotes = await response.json();
      const quote = await quotes[Math.floor(Math.random() * quotes.length)];
      setState((prevState) => ({
        ...prevState,
        apiQuoteText: quote.text,
      }));
      if (!quote.author) {
        setState((prevState) => ({
          ...prevState,
          apiQuoteAuthor: "Unknown",
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          apiQuoteAuthor: quote.author,
          loading: false,
        }));
      }
    } catch (error) {
      alert(error);
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (state.loading) {
    return <Spinner size="lg" color="white" />;
  }

  return (
    <>
      <Card className={styles.quoteContainer} id="quote-container">
        <CardBody>
          <QuoteText apiQuoteText={state.apiQuoteText} />
          <div className={styles.quoteAuthor}>
            <span>{state.apiQuoteAuthor}</span>
          </div>
          <Buttons
            apiQuoteAuthor={state.apiQuoteAuthor}
            apiQuoteText={state.apiQuoteText}
            fetchQuote={fetchQuote}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default QuoteContainer;
