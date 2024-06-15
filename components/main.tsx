export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex grow flex-col items-center justify-center px-8 py-16">
      {children}
    </main>
  );
}
