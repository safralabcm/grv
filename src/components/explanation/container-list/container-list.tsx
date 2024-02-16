import { ReactNode } from "react";

export const ContainerList = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <ul className={`flex flex-col gap-4 ${className}`}>{children}</ul>;
};
