import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function BusinessFilter() {
  const [field, setField] = React.useState("");
  const [feature, setFeature] = React.useState("");

  const handleChange = (event) => {
    setField(event.target.value);
  };

  const handleFeatureChange = (event) => {
    setFeature(event.target.value);
  };

  const [checkboxValues, setCheckboxValues] = useState({
    windows: false,
    macOS: false,
    chrome: false,
    compact: false,
    small: false,
    cmedium: false,
    large: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="dark-orange-background mx-4 sm:mx-0 flex">
      <div className="mx-auto sm:w-5/6">
        <div className="flex lg:flex-row flex-col items-center border-b border-black">
          <span className="text-white text-md font-medium p-1">
            Company Expertise
          </span>
          <FormControl fullWidth>
            <Select
              value={field}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">Select your field of expertise</MenuItem>
              <MenuItem value="Marketing/Advertising">
                Marketing/Advertising
              </MenuItem>
              <MenuItem value="Education">Learning/Education</MenuItem>
              <MenuItem value="IT">Technology</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="py-4 border-b border-black">
          <div className="flex justify-center lg:justify-start">
            <div className="w-1/4 text-right">
              <h1 className="text-white text-md font-medium">Quantity</h1>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row lg:items-end items-center justify-evenly p-2">
            <div className="lg:w-1/4 flex lg:flex-col">
              <div className="flex px-2">
                <div className="text-center lg:text-right">
                  <p className="text-xs text-black font-medium">
                    Display results <br /> on stock availability
                  </p>
                </div>
              </div>
              <div className="flex justify-evenly items-center px-2">
                <span>Off</span>
                <Switch />
                <span>On</span>
              </div>
            </div>

            {/* Slider */}
            <div className="w-full lg:w-1/2 flex p-2 items-end">
              <span>1</span>
              <Slider
                min={1}
                max={15}
                defaultValue={1}
                aria-label="Default"
                valueLabelDisplay="on"
              />
              <span>15</span>
            </div>

            <span className="hidden lg:block lg:w-1/4">15 Items or more?</span>
          </div>
        </div>

        <div className="border-b border-black flex whitespace-nowrap fill-white">
          <span className="text-white font-medium w-1/4 text-center">OS</span>
          <div className="w-full flex justify-evenly items-center p-4">
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                name="windows"
                checked={checkboxValues.windows}
                onChange={handleCheckboxChange}
              />
              <div className="w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
                </svg>
              </div>
              <label>Windows</label>
            </div>
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                name="macOS"
                checked={checkboxValues.macOS}
                onChange={handleCheckboxChange}
              />
              <div className="w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              </div>
              <label>Mac OS</label>
            </div>
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                name="chrome"
                checked={checkboxValues.chrome}
                onChange={handleCheckboxChange}
              />
              <div className="w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z" />
                </svg>
              </div>
              <label>Chrome</label>
            </div>
          </div>
        </div>

        <div className="border-b border-black">
          <span className="text-white font-medium">Screen Size</span>
          <input
            type="checkbox"
            name="compact"
            checked={checkboxValues.compact}
            onChange={handleCheckboxChange}
          />
          <label>Compact</label>
          <input
            type="checkbox"
            name="small"
            checked={checkboxValues.small}
            onChange={handleCheckboxChange}
          />
          <label>Small</label>
          <input
            type="checkbox"
            name="medium"
            checked={checkboxValues.medium}
            onChange={handleCheckboxChange}
          />
          <label>Medium</label>
          <input
            type="checkbox"
            name="large"
            checked={checkboxValues.large}
            onChange={handleCheckboxChange}
          />
          <label>Large</label>
        </div>

        <div className="flex items-center whitespace-nowrap">
          <span className="text-white font-medium">Add an option</span>
          <FormControl fullWidth>
            <Select
              value={feature}
              onChange={handleFeatureChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">Select Features</MenuItem>
              <MenuItem value="RAM">RAM</MenuItem>
              <MenuItem value="Processor">Processor</MenuItem>
              <MenuItem value="Brand">Brand</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default BusinessFilter;
