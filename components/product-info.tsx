import getData from "@/lib/get-data";
import Image from "next/image";

export type Product = {
  title: string;
  img: string;
  date: string;
};

export default async function ProductInfo() {
  const {
    data: { product },
  }: {
    data: {
      product: Product;
    };
  } = await getData("product");

  return (
    <>
      <div className="aspect-square w-full">
        <Image src={product.img} width={300} height={300} alt={product.title} />
      </div>
      <h2 className="text-[24px] font-bold">{product.title}</h2>
    </>
  );
}
