import React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Paragraph = ({ children, className = "", ...props }: ParagraphProps) => {
  return (
    <p
      className={`font-Manrope text-gray-600 dark:text-gray-400 md:text-base text-sm ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
