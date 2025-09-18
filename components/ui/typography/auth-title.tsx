import React from "react";

interface AuthTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

const AuthTitle = ({ title, subtitle, className }: AuthTitleProps) => {
  return (
    <div className={`flex flex-col  pb-[40px] ${className}`}>
      <h1 className="text-[40px] font-bold text-black">{title}</h1>
      <p className="text-[#595959] text-base font-normal leading-6">
        {subtitle}
      </p>
    </div>
  );
};

export default AuthTitle;
