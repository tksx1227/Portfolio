import type { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div className={"lg:font-mono text-gray600"}>
      <Header />
      <main className={"pt-8 pb-28 px-4 lg:px-16 lg:pt-16"}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
