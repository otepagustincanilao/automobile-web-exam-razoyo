import React, { useState } from "react";
import AccordionUI from "./AccordionUI";

const Accordion = () => {
  const [index, setIndex] = useState(false);

  // car list data
  const cars = [
    {
      make: "HONDA",
      model: "Civic",
      series: "Civic-SE2022",
      year: "2022",
      slug: "honda-civic-2022",
      seat_capacity: 5,
      color: "Navy Blue",
      miles_per_gallon: 30,
      transmission: "Manual",
      fuel_type: "Gas",
      price: 1700000.5,
      currency: "PHP",
    },
    {
      make: "TOYOTA",
      model: "Vios",
      series: "Vios SE2021",
      year: "2021",
      slug: "toyota-vios-2021",
      seat_capacity: 5,
      color: "Maroon",
      miles_per_gallon: 31,
      transmission: "Manual",
      fuel_type: "Gas",
      price: 850000.5,
      currency: "PHP",
    },
    {
      make: "TOYOTA",
      model: "Fortuner",
      series: "Fortuner S2022",
      year: "2022",
      slug: "toyota-fortuner-2022",
      seat_capacity: 8,
      color: "Black Mica",
      miles_per_gallon: 35,
      transmission: "Automatic",
      fuel_type: "Diesel",
      price: 2450000.5,
      currency: "PHP",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-50">
      {cars.map((car) => {
        return (
          <AccordionUI
            make={car.make}
            model={car.model}
            series={car.series}
            year={car.year}
            slug={car.slug}
            seat_capacity={car.seat_capacity}
            color={car.color}
            miles_per_gallon={car.miles_per_gallon}
            transmission={car.transmission}
            fuel_type={car.fuel_type}
            price={car.price}
            currency={car.currency}
            index={index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};

export default Accordion;
