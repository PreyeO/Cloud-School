import React from "react";

interface AuthSpanProps {
  children: React.ReactNode;
  className?: string;
}

const AuthSpan = ({ children, className }: AuthSpanProps) => {
  return (
    <p
      className={`{${className} text-black text-sm font-normal leading-6 max-w-[540px]`}
    >
      {children}
    </p>
  );
};

export default AuthSpan;
