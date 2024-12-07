import React from "react";
import x from "/x.png";
import butterfly from "/butterfly.png";
import { QuoteData } from "../types";

interface QuoteContainerProps {
  quote: QuoteData;
  isLoading?: boolean;
  onNewQuote: () => void;
  language: string;
  onChangeLanguage: (lang: string) => void;
}

const QuoteContainer: React.FC<QuoteContainerProps> = ({
  quote,
  isLoading,
  onNewQuote,
  language,
  onChangeLanguage,
}) => {
  const tweetQuote = () => {
    const tweetText = encodeURIComponent(`${quote.content} ~${quote.author}`);
    return `https://twitter.com/intent/tweet?text=${tweetText}`;
  };
  const blueSkyQuote = () => {
    const skeetText = encodeURIComponent(`${quote.content} ~${quote.author}`);
    return `https://bluesky.com/intent/skeet?text=${skeetText}`;
  };

  const buttonClass = `flex items-center gap-2 px-4 py-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300 border border-white/40`;

  return (
    <div className="flex flex-col">
      <div
        id="quote-box"
        className="bg-black/50 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-2xl w-full mx-auto transform hover:scale-[1.02] transition-all duration-500"
        style={{
          boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        <blockquote dir={language === "ar" ? "rtl" : "ltr"}>
          <p
            id="text"
            className={`flex gap-4 text-2xl font-serif leading-relaxed mb-4 transition-all duration-300 text-white ${
              isLoading ? "opacity-50" : "opacity-100"
            }`}
          >
            <span className="text-4xl">"</span> {quote.content}
          </p>

          <footer
            id="author"
            className={`text-lg text-white/80 font-medium transition-all duration-300 ${
              isLoading ? "opacity-50" : "opacity-100"
            } ${language === "ar" ? "text-left" : "text-right"}`}
          >
            ~{quote.author || ""}
          </footer>
        </blockquote>

        <div
          className={`flex flex-wrap gap-4 justify-between items-center mt-8  ${
            language === "en" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="flex items-center gap-2">
            <a
              id="tweet-quote"
              className={buttonClass}
              aria-label="Tweet this quote"
              rel="noopener noreferrer"
              href={tweetQuote()}
              target="_blank"
            >
              <img src={x} alt="Twitter logo" width={20} />
              <span className="hidden sm:block">Tweet</span>
            </a>

            <a
              id="Skeet-quote"
              className={buttonClass}
              aria-label="Skeet this quote"
              rel="noopener noreferrer"
              href={blueSkyQuote()}
              target="_blank"
            >
              <img src={butterfly} alt="Bluesky logo" width={20} />
              <span className="hidden sm:block">Skeet</span>
            </a>
          </div>

          <button
            id="new-quote"
            className={`${buttonClass} disabled:opacity-50 disabled:cursor-not-allowed px-6`}
            disabled={isLoading}
            aria-label="new Quote"
            onClick={onNewQuote}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <a
          role="button"
          className={`text-white hover:text-white/80 px-4 py-2 ${
            language === "en" ? "font-bold" : ""
          }`}
          onClick={() => onChangeLanguage("en")}
        >
          English
        </a>

        <a
          role="button"
          className={`text-white hover:text-white/80 px-4 py-2 ${
            language === "ar" ? "font-bold" : ""
          }`}
          onClick={() => onChangeLanguage("ar")}
        >
          Arabic
        </a>
      </div>
    </div>
  );
};

export default QuoteContainer;
