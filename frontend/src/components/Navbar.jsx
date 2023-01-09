function Navbar() {
  return (
    <>
    {/* Top Nav Bar */}
      <nav className="text-center text-white text-xs h-9 w-full bg-gray-900 py-0 px-20">
        <div className="h-full w-8 cursor-pointer flex items-center justify-start md:hidden">
          <svg
            className="h-full fill-gray-200"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </div>
        <ul className="justify-start md:flex hidden lg:pr-64 pr-0">
          <li className="mx-auto leading-9">
            <a href="#">PB Tech</a>
          </li>
          <li className="mx-auto leading-9">
            <a href="#">Hardwired</a>
          </li>
          <li className="mx-auto leading-9">
            <a href="#">PB Business</a>
          </li>
          <li className="mx-auto leading-9">
            <a href="#">PB Education</a>
          </li>
          <li className="mx-auto leading-9">
            <a href="#">PB Wholesale</a>
          </li>
          <li className="mx-auto leading-9">
            <a href="#">PB Government</a>
          </li>
          <li className="mx-auto leading-9">
            <a href="#">PB Health</a>
          </li>
          <li className="mx-auto leading-9">
            <a href="#">PB IoT</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
