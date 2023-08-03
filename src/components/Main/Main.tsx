import sass from "./Main.module.scss";

import { FC, ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => (
  <main className={sass.main}>{children}</main>
);
