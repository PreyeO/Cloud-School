import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Title = ({ children, className = "", ...props }: TitleProps) => {
  return (
    <h1
      className={`font-Bricolage_grotesque text-gray-900 md:text-3xl text-2xl  lg:text-4xl font-bold dark:text-white  ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
