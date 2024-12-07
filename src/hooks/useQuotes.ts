import { useState, useCallback } from "react";
import { QuoteData, ENQUOTES, ARQUOTES } from "../types";

export const useQuotes = () => {
  const initialLanguage = localStorage.getItem("language") || "en";
  const initialQuote = initialLanguage === "en" ? ENQUOTES[0] : ARQUOTES[0];

  const [quote, setQuote] = useState<QuoteData>(initialQuote);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<string>(initialLanguage);

  const getRandomQuote = (): QuoteData => {
    const QUOTES = language === "en" ? ENQUOTES : ARQUOTES;
    let newQuote: QuoteData;
    do {
      newQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    } while (newQuote === quote && QUOTES.length > 1);
    return newQuote;
  };

  const fetchNewQuote = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newQuote = getRandomQuote();
      setQuote(newQuote);
      setIsLoading(false);
    }, 300);
  }, [quote, language]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setQuote(lang === "en" ? ENQUOTES[0] : ARQUOTES[0]);
  };

  return { quote, isLoading, fetchNewQuote, language, changeLanguage };
};
