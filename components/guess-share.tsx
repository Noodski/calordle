import getData from "@/lib/get-data";
import Guess from "./guess";
import Share from "./share";
import { type Product } from "./product-info";

export default async function GuessShare() {
  const {
    data: {
      product: { date: currentDate },
    },
  }: {
    data: {
      product: Product;
    };
  } = await getData("product");

  return (
    <div className="relative mt-2 w-full">
      <Guess />
      <Share currentDate={currentDate} />
    </div>
  );
}
