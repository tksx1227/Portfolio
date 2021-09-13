import Link from "next/link";

export const Header = () => {
  return (
    <header
      className={
        "font-semibold bg-white absolute w-full p-6 border-b-2 md:text-lg md:p-10 md:flex md:flex-row md:justify-between"
      }
    >
      <div className={"hidden md:block"}></div>
      <div className={"flex flex-row justify-around md:space-x-3"}>
        <Link href="/#top">
          <a className={"px-0 under-bar md:px-2"}>HOME</a>
        </Link>
        <Link href="/#skills">
          <a className={"px-0 under-bar md:px-2"}>SKILLS</a>
        </Link>
        <Link href="/#products">
          <a className={"px-0 under-bar md:px-2"}>PRODUCTS</a>
        </Link>
        <Link href="/#profile">
          <a className={"px-0 under-bar md:px-2"}>PROFILE</a>
        </Link>
      </div>
    </header>
  );
};
