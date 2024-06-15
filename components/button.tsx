interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="hover:bg-dark-blue rounded-md bg-blue px-4 py-2 text-[18px] font-bold text-white transition-colors"
      {...props}
    >
      {children}
    </button>
  );
}
