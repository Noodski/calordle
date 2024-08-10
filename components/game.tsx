import getData from "@/lib/get-data";
import Guess from "./guess";
import GuessCount from "./guess-count";
import Guesses from "./guesses";
import ProductInfo from "./product-info";
import Share from "./share";

export default async function Game() {
  const {
    data: { currentDate },
  }: {
    data: {
      currentDate: string;
    };
  } = await getData("game-data");

  return (
    <div className="flex max-w-[300px] flex-col items-center justify-center gap-y-4">
      <ProductInfo />
      <GuessCount />
      <Guesses />
      <Guess />
      <Share currentDate={currentDate} />
    </div>
  );
}
