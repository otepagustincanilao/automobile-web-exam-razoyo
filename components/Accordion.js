import axios from "axios";
import React, { useEffect, useState } from "react";
import AccordionUI from "./AccordionUI";

const Accordion = () => {
  const [index, setIndex] = useState(false);
  const [carList, setCarList] = useState([]);
  const [authToken, setAuthToken] = useState([]);

  const getCars = () => {
    fetch("api/cars/list-cars")
      .then((response) => response.json())
      .then((result) => {
        setCarList(result.data.cars);
        setAuthToken(result.auth_token);
      });
  };

  useEffect(() => {
    getCars();
  }, [setCarList]);

  return (
    <div className="flex flex-col justify-center items-center md:mt-11 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-200">
      {carList.map((car) => {
        return (
          <AccordionUI
            Id={car.id}
            year={car.year}
            make={car.make}
            model={car.model}
            index={index}
            setIndex={setIndex}
            authToken={authToken}
          ></AccordionUI>
        );
      })}
    </div>
  );
};

export default Accordion;
