import { data } from "autoprefixer";
import React, { useState } from "react";
import { HiChevronDown, HiOutlineX } from "react-icons/hi";
import Loader from "./Loader";

function AccordionUI({
  Id,
  make,
  model,
  year,
  index,
  setIndex,
  authToken,
} = props) {

  const [respId, setRespId] = useState("");
  const [respMake, setRespMake] = useState("");
  const [respModel, setRespModel] = useState("");
  const [respYear, setRespYear] = useState("");

  const [imgUrl, setImgUrl] = useState("");
  const [series, setSeries] = useState("");
  const [slug, setSlug] = useState("");
  const [seatCapacity, setSeatCapacity] = useState("");
  const [color, setColor] = useState("");
  const [milesPerGallon, setMilesPerGallon] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("");
 

  const getCar = (Id) => {
    fetch(`api/cars/${Id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken,
      }
      
    })
      .then((response) => response.json())
      .then((result) => {

        setRespId(result.data.id)
        setRespMake(result.data.make)
        setRespModel(result.data.model)
        setRespYear(result.data.year)

        setImgUrl(result.data.img_url)
        setSeries(result.data.series)
        setSlug(result.data.slug)
        setSeatCapacity(result.data.seat_capacity)
        setColor(result.data.color)
        setMilesPerGallon(result.data.miles_per_gallon)
        setTransmission(result.data.transmission)
        setFuelType(result.data.fuel_type)
        setPrice(result.data.price)
        setCurrency(result.data.currency)
      });
  };

  const handleSetIndex = (Id) => {
    if (index !== Id) {
      setIndex(Id);
      getCar(Id);
    }
  };

  console.log([price, currency])

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
        <div className="flex group bg-green-50 pl-10  w-3/4 h-auto rounded-md border-1 border-blue-900 mb-2">
            <div className="flex group mt-11 mb-11">
              <img
                src={imgUrl}
                class="p-1 bg-white border rounded max-w-sm"
                alt=""
              />
            </div>
            <div className="text-green-700 font-mono">
              <div className="flex group justify-left pt-20 pl-5">
                <p>Maker: <span className="text-yellow-900 font-extrabold">{respMake}</span></p>
              </div>
              <div className="flex group justify-left pl-5">
                <p>Model: {respModel}</p>
              </div>
              <div className="flex group justify-left pl-5">
                <p>Year: {respYear}</p>
              </div>
              <div className="flex group justify-left pl-5">
                <p>Seat: {seatCapacity}</p>
              </div>
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
