import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const { title, onClick } = props;

  return (
    <button
      className="py-1 px-6 bg-slate-900 text-slate-100 rounded-3xl"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button