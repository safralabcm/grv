import { ReactNode } from "react";

export const FooterContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`font-normal text-[#141204] tracking-wide text-base md:text-lg  ${className}`}
    >
      {children}
    </div>
  );
};
