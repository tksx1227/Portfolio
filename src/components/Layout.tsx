import type { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div className={"font-mono text-gray600"}>
      <Header />
      <main className={"pt-16 pb-28 px-16"}>{props.children}</main>
      <Footer />
    </div>
  );
};
