import React from "react";

const dummyExpertise = "technology";

export default function DisplayByExpertise() {
  return (
    <div>
      <div>
        <h1>Most popular laptops for businesses in {dummyExpertise} sector</h1>
        <p>
          Here is a selection of top laptop choices for {dummyExpertise}{" "}
          businesses hand-picked from our data{" "}
        </p>
        <button>See more</button>
      </div>
      <div className="flex w-full">
        <img alt="laptop pic" className="w-5" src="/images/laptop1.jpg"></img>
        <img alt="laptop pic" className="w-5" src="/images/laptop2.jpg"></img>
        <img alt="laptop pic" className="w-5" src="/images/laptop3.jpg"></img>
        <img alt="laptop pic" className="w-5" src="/images/laptop4.jpg"></img>
      </div>
    </div>
  );
}
