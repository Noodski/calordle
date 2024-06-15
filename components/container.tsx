export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[400px] mx-auto p-4 flex flex-col items-center justify-center gap-y-8">
      {children}
    </div>
  );
}
