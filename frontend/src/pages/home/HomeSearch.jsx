import Installing from "../../assets/img/installing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

function HomeSearch() {
  return (
    <div className="text-gray-900 w-full max-w-5xl flex bg-amber-600 pl-10 p-4 my-4 mx-auto rounded-xl overflow-hidden">
      <div className="w-1/2 p-2 pr-0 flex flex-col text-right">
        <p className="text-3xl -mr-2">I'm looking to use a</p>
        <h1 className="-mb-12 font-medium text-8xl">laptop for</h1>
        <img className="-mb-6" src={Installing} alt="computer artwork"></img>
      </div>
      <div className="w-1/2 p-4 flex items-center">
        <ul className="w-full">
          <li className="text-4xl font-light border-b-4 m-6 border-gray-900 flex justify-between">
            my business
            <FontAwesomeIcon
              icon={faComputer}
              className="whitespace-nowrap p-3 items-center ml-1 text-gray-900 size-2 fa-md"
            />
          </li>
          <li className="text-4xl font-light border-b-4 m-6 border-gray-900 flex justify-between">
            gaming
            <FontAwesomeIcon
              icon={faComputer}
              className="whitespace-nowrap p-3 items-center ml-1 text-gray-900 size-2 fa-md"
            />
          </li>
          <li className="text-4xl font-light border-b-4 m-6 border-gray-900 flex justify-between">
            graphic/motion
            <FontAwesomeIcon
              icon={faComputer}
              className="whitespace-nowrap p-3 items-center ml-1 text-gray-900 size-2 fa-md"
            />
          </li>
          <li className="text-4xl font-light border-b-4 m-6 border-gray-900 flex justify-between">
            home/studio
            <FontAwesomeIcon
              icon={faComputer}
              className="whitespace-nowrap p-3 items-center ml-1 text-gray-900 size-2 fa-md"
            />
          </li>
          <li className="text-4xl font-light border-b-4 m-6 border-gray-900 flex justify-between">
            workstation
            <FontAwesomeIcon
              icon={faComputer}
              className="whitespace-nowrap p-3 items-center ml-1 text-gray-900 size-2 fa-md"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeSearch;
