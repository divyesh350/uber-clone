import React from 'react';

const LocationSearchPanel = (props) => {
  const { suggestions, setVehilcePanel, setPanelOpen, setPickup, setDestination, activeField } = props;

  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    setVehilcePanel(true);
    setPanelOpen(false);
  };

  return (
    <div>
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          onClick={() => handleSuggestionClick(suggestion)}
          className='flex items-center gap-4 justify-start my-2 border border-gray-300 p-2 rounded-xl bg-white hover:shadow-md cursor-pointer duration-300'
        >
          <h2 className='bg-[#eee] rounded-full w-10 h-10 flex justify-center items-center'>
            <i className='ri-map-pin-fill'></i>
          </h2>
          <h4 className='font-normal'>{suggestion}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;