interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, disabled, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-md bg-blue px-4 py-2 text-[18px] font-bold text-white transition hover:bg-dark-blue ${disabled ? `opacity-50` : ``}`}
      {...props}
    >
      {children}
    </button>
  );
}
