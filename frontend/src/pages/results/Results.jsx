import MainResultsDisplay from "./MainResultsDisplay";
import DisplayByExpertise from "./DisplayByExpertise";

export default function Results({laptops}) {
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <h1 className="text-4xl text-gray-900 font-bold m-4">
          Your search results
        </h1>
        <p className="text-md text-gray-900 m-4 mb-8">
          Based on your search preferences, we think these laptops are the best
          fit for your needs.
        </p>
      </div>
      <MainResultsDisplay laptops={laptops} />
      {/* <DisplayByExpertise /> */}
    </div>
  );
}
