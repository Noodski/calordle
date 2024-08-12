"use server";

export async function submitGuess(prevState: any, formData: FormData) {
  // @TODO: Anything additional needed here?
  const res = await fetch(`${process.env.API_URL}/submit-guess`, {
    method: "POST",
    body: formData,
  });

  // @TODO: Better error handling
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
