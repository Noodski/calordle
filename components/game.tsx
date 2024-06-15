import Guess from "./guess";
import GuessCount from "./guess-count";
import Guesses from "./guesses";
import ProductInfo from "./product-info";
import Share from "./share";

// Hard coded for now, but will be dynamic later
const correctGuess: number = 95;

export default function Game() {
  return (
    <div className="flex max-w-[300px] flex-col items-center justify-center gap-y-4">
      <ProductInfo />
      <GuessCount />
      <Guesses />
      <Guess correctGuess={95} />
      <Share />
    </div>
  );
}
