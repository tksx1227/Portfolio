export const Header = () => {
  return (
    <header
      className={
        "font-bold flex flex-row justify-around p-4 border-b-2 lg:text-lg lg:p-10 lg:justify-end lg:space-x-3"
      }
    >
      <a href="#top" className={"px-2 lg:under-bar"}>
        HOME
      </a>
      <a href="#skills" className={"px-2 lg:under-bar"}>
        SKILLS
      </a>
      <a href="#products" className={"px-2 lg:under-bar"}>
        PRODUCTS
      </a>
      <a href="#profile" className={"px-2 lg:under-bar"}>
        PROFILE
      </a>
    </header>
  );
};
