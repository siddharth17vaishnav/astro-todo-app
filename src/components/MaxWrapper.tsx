import type { ReactNode } from "react";

const MaxWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[800px] mx-auto my-7">{children}</div>;
};

export default MaxWrapper;
