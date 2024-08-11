import useProgress from "@/hooks/use-progress";
import SlideDown from "./slide-down";

export default function Result({
  progress,
  children,
}: {
  progress: "success" | "fail";
  children: React.ReactNode;
}) {
  const currentProgress = useProgress();

  return (
    <>
      {currentProgress === progress && (
        <SlideDown>
          <div className="pt-4">
            <p
              className={`rounded-md px-4 py-2 text-white ${progress === "success" ? `bg-green` : `bg-red`}`}
            >
              {children}
            </p>
          </div>
        </SlideDown>
      )}
    </>
  );
}
