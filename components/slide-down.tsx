export default function SlideDown({ children }: { children: React.ReactNode }) {
  // https://css-tricks.com/css-grid-can-do-auto-height-transitions/
  return (
    <div className="grid grid-rows-[1fr] overflow-hidden transition-[grid-template-rows] duration-500 starting:grid-rows-[0fr]">
      <div className="visible min-h-0 transition-[visibility] duration-500 starting:invisible">
        {children}
      </div>
    </div>
  );
}
