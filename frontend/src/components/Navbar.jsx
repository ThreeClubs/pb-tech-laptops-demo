function Navbar() {
  return (
    <>
      <nav className="text-center text-white h-9 w-full bg-gray-900 py-0 px-20">
        <ul className="pr-64 flex flex-grow-0 justify-start items-center text-xs">
          <li className="border border-white h-8 w-22 mr-16 px-4 pb-1 flex justify-start items-start">
            <a className="block flex flex-nowrap" href="#">
              PB Tech
            </a>
          </li>
          <li className="border border-white h-8 w-22 mr-16 px-4 pb-1 flex justify-start items-start">
            <a className="block flex flex-nowrap" href="#">
              Hardwired
            </a>
          </li>
          <li className="border border-white h-8 w-22 mr-16 px-4 pb-1 flex justify-center items-start">
            <a className="block flex flex-nowrap" href="#">
              PB Business
            </a>
          </li>
          <li className="border border-white h-8 w-22 mr-16 px-4 pb-1 flex justify-start items-start">
            <a className="block flex flex-nowrap" href="#">
              PB Education
            </a>
          </li>
          <li className="border border-white h-8 w-22 mr-16 px-4 pb-1 flex justify-start items-start">
            <a className="block flex flex-nowrap" href="#">
              PB Wholesale
            </a>
          </li>
          <li className="border border-white h-8 w-22 mr-16 px-4 pb-1 flex justify-start items-start">
            <a className="block flex flex-nowrap" href="#">
              PB Government
            </a>
          </li>
          <li className="border border-white h-8 w-22 mr-16 px-4 pb-1 flex justify-start items-start">
            <a className="block flex flex-nowrap" href="#">
              PB Health
            </a>
          </li>
          <li className="border border-white h-8 w-22 mr-16 px-4 pb-1 flex justify-start items-start">
            <a className="block flex flex-nowrap" href="#">
              PB IoT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
