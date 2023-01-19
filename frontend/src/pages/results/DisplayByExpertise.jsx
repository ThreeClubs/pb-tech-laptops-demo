import React from "react";

const dummyExpertise = "technology";

export default function DisplayByExpertise() {
  return (
    <div className="mx-auto max-w-6xl p-4 bg-sky-300">
      <div className="flex mb-4">
        <div className="w-3/4">
          <h1>
            Most popular laptops for businesses in the {dummyExpertise} sector
          </h1>
          <p>
            Here is a selection of top laptop choices for {dummyExpertise}{" "}
            businesses, hand-picked from our data!{" "}
          </p>
        </div>

        <div className="w-1/4">
          <button>See more</button>
        </div>
      </div>
      <div className="flex w-full">
        <img alt="laptop pic" className="w-1/4" src="/images/laptop1.jpg"></img>
        <img alt="laptop pic" className="w-1/4" src="/images/laptop2.jpg"></img>
        <img alt="laptop pic" className="w-1/4" src="/images/laptop3.jpg"></img>
        <img alt="laptop pic" className="w-1/4" src="/images/laptop4.jpg"></img>
      </div>
    </div>
  );
}
