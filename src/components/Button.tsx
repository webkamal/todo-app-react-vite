interface ButtonProps {
  buttonType: 'submit' | 'button' | 'reset';
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ buttonType, onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`h-[45px] w-full border-[none] rounded-[5px] bg-[#473a2b] text-[#fff] text-[16px] cursor-pointer flex justify-center items-center [transition:all_0.2s] hover:bg-[#322618]
 ${buttonType === "secondary" ? "text-[14px] opacity-[0.85]" : ""}`}
    >
      {children}
    </button>
  );
}

