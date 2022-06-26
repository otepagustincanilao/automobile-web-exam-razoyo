import axios from "axios";
import React, { useEffect, useState } from "react";
import AccordionUI from "./AccordionUI";

const Accordion = () => {
  const [index, setIndex] = useState(false);
  const [carList, setCarList] = useState([]);

  const getCars = () => {
    fetch("api/cars/list-cars")
      .then((response) => response.json())
      .then((result) => setCarList(result.data.cars));
  };

  useEffect(() => {
    getCars();
  }, [setCarList]);

  console.log(carList);
  // car list data
  // const cars = [
  //   {
  //     id: "1",
  //     img_url:
  //       "https://d3ggoe3aghc7um.cloudfront.net/uploads/prices/348/002_348_1595675088386_000.jpg",
  //     make: "HONDA",
  //     model: "Civic",
  //     series: "Civic-SE2022",
  //     year: "2022",
  //     slug: "honda-civic-2022",
  //     seat_capacity: 5,
  //     color: "Navy Blue",
  //     miles_per_gallon: 30,
  //     transmission: "Manual",
  //     fuel_type: "Gas",
  //     price: 1700000.5,
  //     currency: "₱",
  //   },
  //   {
  //     id: "2",
  //     img_url:
  //       "https://imgcdn.zigwheels.ph/large/gallery/exterior/30/1943/toyota-vios-front-side-view-409037.jpg",
  //     make: "TOYOTA",
  //     model: "Vios",
  //     series: "Vios SE2021",
  //     year: "2021",
  //     slug: "toyota-vios-2021",
  //     seat_capacity: 5,
  //     color: "Maroon",
  //     miles_per_gallon: 31,
  //     transmission: "Manual",
  //     fuel_type: "Gas",
  //     price: 850000.5,
  //     currency: "₱",
  //   },
  //   {
  //     id: "3",
  //     img_url:
  //       "https://d3ggoe3aghc7um.cloudfront.net/uploads/prices/348/002_348_1595675088386_000.jpg",
  //     make: "TOYOTA",
  //     model: "Fortuner",
  //     series: "Fortuner S2022",
  //     year: "2022",
  //     slug: "toyota-fortuner-2022",
  //     seat_capacity: 8,
  //     color: "Black Mica",
  //     miles_per_gallon: 35,
  //     transmission: "Automatic",
  //     fuel_type: "Diesel",
  //     price: 2450000.5,
  //     currency: "₱",
  //   },
  // ];

  return (
    <div className="flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-200">
      {carList.map((car) => {
        return (
          <AccordionUI
            Id={car.id}
            year={car.year}
            make={car.make}
            model={car.model}
            // need to consume another api for opening an accordion car details
            // imgUrl={car.img_url}
            // series={car.series}
            // slug={car.slug}
            // seatCapacity={car.seat_capacity}
            // color={car.color}
            // milesPerGallon={car.miles_per_gallon}
            // transmission={car.transmission}
            // fuelType={car.fuel_type}
            // price={car.price}
            // currency={car.currency}
            // index={index}
            // setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};

export default Accordion;
