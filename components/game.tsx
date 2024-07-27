import getData from "@/lib/get-data";
import Guess from "./guess";
import GuessCount from "./guess-count";
import Guesses from "./guesses";
import ProductInfo from "./product-info";
import Share from "./share";

export default async function Game() {
  const {
    data: { correctGuess, currentDate },
  }: {
    data: {
      correctGuess: number;
      currentDate: string;
    };
  } = await getData("game-data");

  return (
    <div className="flex max-w-[300px] flex-col items-center justify-center gap-y-4">
      <ProductInfo />
      <GuessCount />
      <Guesses />
      <Guess correctGuess={correctGuess} />
      <Share currentDate={currentDate} />
    </div>
  );
}
