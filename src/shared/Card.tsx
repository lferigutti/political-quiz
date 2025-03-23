
import { ReactNode } from "react";

const Card = ({ title, children }:{title: string, children?: ReactNode}) => {
  return (
    <div className="w-full bg-background p-4 rounded-lg shadow-lg mt-4 md:max-w-4xl md:h-full sm:max-w-2xl text-colorText">
      <h1 className="md:text-3xl font-bold md:m-4">
        {title}
      </h1>
      <div className="md:m-4 md:text-lg space-y-4 flex flex-col">
        {children}
      </div>
    </div>
  );
};


export default Card;
