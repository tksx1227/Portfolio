import Link from "next/link";

export const Header = () => {
  return (
    <header
      className={
        "font-bold flex flex-row justify-center p-6 border-b-2 lg:text-lg lg:p-10 lg:justify-between"
      }
    >
      <div className={"hidden lg:block"}>SAMPLE TITLE</div>
      <div className={"flex flex-row justify-around space-x-3"}>
        <Link href="/#top">
          <a className={"px-2 under-bar"}>HOME</a>
        </Link>
        <Link href="/#skills">
          <a className={"px-2 under-bar"}>SKILLS</a>
        </Link>
        <Link href="/#products">
          <a className={"px-2 under-bar"}>PRODUCTS</a>
        </Link>
        <Link href="/#profile">
          <a className={"px-2 under-bar"}>PROFILE</a>
        </Link>
      </div>
    </header>
  );
};
