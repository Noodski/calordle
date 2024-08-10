"use client";

import { useProgress } from "@/context/progress";
import { useState, ChangeEvent } from "react";
import Button from "./button";

export default function Guess() {
  const [value, setValue] = useState<string>("");
  const progress = useProgress();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  if (progress === "success" || progress === "fail") return null;

  return (
    <form className="flex w-full flex-col gap-4 sm:flex-row">
      <input
        type="number"
        className="w-full rounded-md bg-gray px-4 py-2 text-[18px] font-bold"
        placeholder="Calorie guess"
        value={value}
        onChange={handleInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
