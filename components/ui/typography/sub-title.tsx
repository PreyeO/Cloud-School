import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const SubTitle = ({ children, className = "", ...props }: TitleProps) => {
  return (
    <h2
      className={`font-Bricolage_grotesque text-gray-900 md:text-2xl text-xl font-semibold   lg:text-3xl   ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SubTitle;
