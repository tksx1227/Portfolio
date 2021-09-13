import type { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div className={"relative text-gray-600"}>
      <Header />
      <main
        className={
          "flex flex-col justify-center pt-20 pb-16 px-4 min-h-screen lg:pt-28 lg:px-16"
        }
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
