import React, { useState } from "react";
import { Switch, Slider, Select } from "antd";

const { Option } = Select;

function BusinessFilter() {
  const [isActive, setIsActive] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [toggleValue, setToggleValue] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
  });
  const [dropdownValue, setDropdownValue] = useState("");

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleToggleChange = (value) => {
    setToggleValue(value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleDropdownChange = (value) => {
    setDropdownValue(value);
  };

  return (
    <div className="bg-amber-600 brightness-95 mx-4 sm:mx-0 flex border-2 border-blue-500">
      <div className="border-2 border-red-600 mx-auto sm:w-5/6">
        <div className="flex lg:flex-row flex-col items-center">
          <span className="text-white text-md font-medium p-1">
            Company Expertise
          </span>
          <Select
            defaultValue="Select your field of expertise"
            onChange={handleDropdownChange}
          >
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
        </div>
        <div className="py-4 border">
          <div className="flex justify-center lg:justify-start">
            <div className="border w-1/4 text-right">
              <h1 className="text-white text-md font-medium">Quantity</h1>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row lg:items-end items-center justify-evenly p-2 border">
            <div className="border lg:w-1/4 flex lg:flex-col">
              <div className="flex px-2">
                <div className="text-center lg:text-right">
                  <p className="text-xs text-black font-medium">
                    Display results <br /> on stock availability
                  </p>
                </div>
              </div>
              <div className="border flex justify-evenly items-center px-2">
                {!isActive && <span className="">Off</span>}
                <Switch
                  onChange={handleToggleChange}
                  onClick={() => setIsActive(!isActive)}
                  checked={toggleValue}
                />
                {isActive && <span className="">On</span>}
              </div>
            </div>

            <div className="border w-full lg:w-1/2 flex p-2 items-end">
              <div className="w-full">
                <Slider
                  min={1}
                  max={15}
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
              </div>
            </div>
            <span className="hidden lg:block border lg:w-1/4">
              15 Items or more?
            </span>
          </div>
        </div>
        <div>
          <div>
            <span>OS</span>
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkboxValues.checkbox1}
              onChange={handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkboxValues.checkbox2}
              onChange={handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="checkbox3"
              checked={checkboxValues.checkbox3}
              onChange={handleCheckboxChange}
            />
          </div>
          <div>
            <span>Screen Size</span>
            <input
              type="checkbox"
              name="checkbox5"
              checked={checkboxValues.checkbox5}
              onChange={handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="checkbox6"
              checked={checkboxValues.checkbox6}
              onChange={handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="checkbox7"
              checked={checkboxValues.checkbox7}
              onChange={handleCheckboxChange}
            />
            <input
              type="checkbox"
              name="checkbox8"
              checked={checkboxValues.checkbox8}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
        <span>Add an option</span>
        <span>
          <Select
            defaultValue="Select Features"
            style={{ width: 150 }}
            onChange={handleDropdownChange}
          >
            <Option value="option4">Option 4</Option>
            <Option value="option5">Option 5</Option>
            <Option value="option6">Option 6</Option>
          </Select>
        </span>
      </div>
    </div>
  );
}

export default BusinessFilter;
