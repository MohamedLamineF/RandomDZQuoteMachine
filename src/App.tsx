import { useState } from "react";
import "./App.css";
import QuoteContainer from "./components/QuoteContainer";
import { GRADIENT_COLORS } from "./types";
import { useQuotes } from "./hooks/useQuotes";

function App() {
  const { quote, isLoading, fetchNewQuote, language, changeLanguage } =
    useQuotes();
  const [bgColor, setBgColor] = useState<number>(0);

  const handleNewQuote = () => {
    setBgColor((prev) => (prev + 1) % GRADIENT_COLORS.length);
    fetchNewQuote();
  };

  return (
    <div
      className={`min-h-screen ${GRADIENT_COLORS[bgColor]} transition-all duration-1000 ease-in-out flex flex-col items-center justify-between p-4 animate-gradient-x`}
    >
      <div></div>

      <div>
        <QuoteContainer
          quote={quote}
          isLoading={isLoading}
          onNewQuote={handleNewQuote}
          language={language}
          onChangeLanguage={changeLanguage}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 w-full text-white/80 text-xs">
        <p className="mr-2  text-center md:text-start truncate ">
          Made for FreeCodeCamp course "Front End Development Libraries"
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://github.com/MohamedLamineF/Random-DZ-Quote-Machine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Github
          </a>
          <span className="text-white/50">•</span>
          <a
            href="https://www.linkedin.com/in/mohamedlaminef/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-white/50">•</span>
          <a
            href="https://x.com/Mohamed_LamineF"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter
          </a>
          <span className="text-white/50">•</span>
          <a
            href="https://bsky.app/profile/mohamedlamine.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Bluesky
          </a>
        </div>
        <span className="mr-2 text-center md:text-end">© Lamine</span>
      </div>
    </div>
  );
}

export default App;
