import { ReactNode } from "react";

const Button = ({
  children,
  type = "primary",
  disabled = false,
  onClick,
  className = "",
  buttonType = "button",
  ...rest
}: {
  children?: ReactNode;
  type?:
    | "primary"
    | "secondary"
    | "accent"
    | "outline"
    | "text"
    | "background-secondary";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  buttonType?: "button" | "submit" | "reset";
}) => {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    rounded-md
    font-medium
    text-base
    px-4 py-2
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    transition-colors
    duration-200
    disabled:opacity-50
    disabled:cursor-not-allowed
    ${className}
  `;

  let typeStyles = "";

  switch (type) {
    case "primary":
      typeStyles = `
        bg-primary
        text-colorText
        hover:bg-[#86e25a]
        focus:ring-primary
      `;
      break;
    case "secondary":
      typeStyles = `
        bg-secondary
        text-white
        hover:bg-[#3fb88e]
        focus:ring-secondary
      `;
      break;
    case "accent":
      typeStyles = `
        bg-neutral
        text-white
        hover:bg-[#28094d]
        focus:ring-neutral
      `;
      break;
    case "outline":
      typeStyles = `
        border border-secondary
        text-colorText
        bg-transparent
        hover:bg-gray-100
        focus:ring-secondary
      `;
      break;
    case "text":
      typeStyles = `
        text-primary
        bg-transparent
        hover:text-[#86e25a]
        focus:ring-primary
      `;
      break;
    case "background-secondary":
      typeStyles = `
        bg-backgroundSecondary
        text-colorText
        hover:bg-[#e4e9f3]
        focus:ring-secondary
      `;
      break;
    default:
      typeStyles = `
        bg-primary
        text-colorText
        hover:bg-[#86e25a]
        focus:ring-primary
      `;
      break;
  }

  return (
    <button
      type={buttonType}
      className={`${baseStyles} ${typeStyles}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
