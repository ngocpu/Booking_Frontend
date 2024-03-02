import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {SearchContext} from '../context/SearchContext'
import './Search.css'
import { BedIcon, Calendar, Presentation, SearchIcon } from "lucide-react";
import DateRange, { DateRangePicker } from 'react-date-range'
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { format } from "date-fns";
export const Search = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };
  return (
    <div className="grid grid-cols-8 gap-3 bg-light w-full my-2 py-3 px-5 rounded-3xl text-light">
      <div className="col-span-3 flex gap-2 items-center">
        <BedIcon color="#757575" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="w-full py-2 outline-none"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="col-span-2 flex gap-2 items-center">
        <Calendar color="#757575" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="text-p-text"
        >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
          dates[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRangePicker
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            className=" top-20 right-[38%] absolute z-40 "
          />
        )}
      </div>
      <div className="col-span-2 flex gap-2 items-center">
        <Presentation color="#757575" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="text-p-text"
        >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
        {openOptions && (
          <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
                <button
                  disabled={options.adult <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
                <button
                  disabled={options.children <= 0}
                  className="optionCounterButton"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.children}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
                <button
                  disabled={options.room <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.room}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex mx-auto">
        <button className="flex mx-auto justify-center items-center p-3 w-[50px] h-[50px] rounded-full bg-d-card" onClick={handleSearch}>
          <SearchIcon color="#fff" />
        </button>
      </div>
    </div>
  );
};
