import Github from "./github";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-x-8 gap-y-4 bg-gray px-8 py-4 sm:flex-row">
      <div>
        <p>
          Created by Cory Horne &{" "}
          <a href="https://blakejones.dev" target="_blank">
            Blake Jones
          </a>
          .
        </p>
        <p>
          Images and products are copyright of their respected owners and are
          not affiliated with Calordle.
        </p>
      </div>
      <div>
        <a href="https://github.com/blakej115/calordle" target="_blank">
          <Github />
        </a>
      </div>
    </footer>
  );
}
