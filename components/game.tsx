import GuessCount from "./guess-count";
import Guesses from "./guesses";
import ProductInfo from "./product-info";
import GuessShare from "./guess-share";

export default function Game() {
  return (
    <div className="flex max-w-[300px] flex-col items-center justify-center">
      <ProductInfo />
      <GuessCount />
      <Guesses />
      <GuessShare />
    </div>
  );
}
