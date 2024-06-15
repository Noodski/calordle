import Guess from "./guess";
import GuessCount from "./guess-count";
import Guesses from "./guesses";
import ProductInfo from "./product-info";
import Share from "./share";

// Hard coded for now, but will be dynamic later
const correctGuess: number = 95;

export default function Game() {
  return (
    <>
      <ProductInfo />
      <GuessCount />
      <Guesses />
      <Guess correctGuess={95} />
      <Share />
    </>
  );
}
