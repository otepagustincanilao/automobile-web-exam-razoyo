import React, { useState } from "react";
import Accordion from "../../components/Accordion";

const index = () => {
  let textInput = React.createRef();

  const [searchMaker, setSearchMaker] = useState("");

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchMaker(textInput.current.value)
  }
  

  return (
    <div>
      <h1 className="text-2xl mt-11 font-semibold text-center">
        Car Catalogue 🚘
      </h1>

          <form>   
          <div className="flex justify-center items-center rounded-xl md:mt-1 md:mx-60 p-10 h-auto py-5 bg-gray-200">
            <div>
              <input ref={textInput} type="search" id="searchMakerId" className="p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Maker" required />
            </div>
            <div>
              <button type="button" onClick={(e) => handleSearch(e)} className="p-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </div>
            <Accordion 
              searchMaker={searchMaker}
            />
          </form>
  
    </div>
  );
};

export default index;
