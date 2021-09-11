export const Header = () => {
  return (
    <header>
      <div
        className={"font-bold text-lg flex flex-row justify-end space-x-3 p-10"}
      >
        <a href="#top" className={"px-2 under-bar"}>
          HOME
        </a>
        <a href="#skills" className={"px-2 under-bar"}>
          SKILLS
        </a>
        <a href="#products" className={"px-2 under-bar"}>
          PRODUCTS
        </a>
        <a href="#profile" className={"px-2 under-bar"}>
          PROFILE
        </a>
      </div>
    </header>
  );
};
