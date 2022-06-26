import { data } from "autoprefixer";
import React from "react";
import { HiChevronDown, HiOutlineX } from "react-icons/hi";

function AccordionUI({
  Id,
  imgUrl,
  make,
  model,
  series,
  year,
  slug,
  seatCapacity,
  color,
  milesPerGallon,
  transmission,
  fuelType,
  price,
  currency,
  index,
  setIndex,
} = props) {
  const handleSetIndex = (Id) => index !== Id && setIndex(Id);
  console.log(setIndex);
  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group cursor-pointer w-3/4 h-16 justify-between items-center p-2 mt-2 rounded bg-white hover:bg-green-600 hover:shadow-lg focus:bg-green-600"
      >
        <div className="flex group cursor-pointer">
          <div className="text-green-900 font-semibold pl-10 group-hover:text-white">
            {year} {make} {model}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {index !== Id ? (
            <HiChevronDown className="w-6 h-6 group-hover:text-white text-green-500" />
          ) : (
            <HiOutlineX className="w-6 h-6 group-hover:text-white text-green-800" />
          )}
        </div>
      </div>

      {index === Id && (
        <div className="flex group bg-green-50 pl-10 font-semibold w-3/4 h-auto rounded-md border-1 border-blue-900 mb-2">
          <div className="flex group mt-11 mb-11">
            <img
              src={imgUrl}
              class="p-1 bg-white border rounded max-w-sm"
              alt=""
            />
          </div>
          {/* car details */}
          <div className="text-green-700 font-mono">
            <div className="flex group justify-left pt-2 pl-5">
              <p>Maker: {make}</p>
            </div>
            <div className="flex group justify-left pl-5">
              <p>Model: {model}</p>
            </div>
            <div className="flex group justify-left pl-5">
              <p>Year: {year}</p>
            </div>
            <div className="flex group justify-left pl-5">
              <p>Seat: {seatCapacity}</p>
            </div>
            {/* <div className="flex group justify-left pl-5">
              <p>Color: {color}</p>
            </div> */}
            <div className="flex group justify-left pl-5">
              <p>MPG: {milesPerGallon}</p>
            </div>
            <div className="flex group justify-left pl-5">
              <p>Transmission: {transmission}</p>
            </div>
            <div className="flex group justify-left pl-5">
              <p>Fuel type: {fuelType}</p>
            </div>
            <div className="flex group justify-left pl-5">
              <p>
                Price: {currency}
                {price}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AccordionUI;
