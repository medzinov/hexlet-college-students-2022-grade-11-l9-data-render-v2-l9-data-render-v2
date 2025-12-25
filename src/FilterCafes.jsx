import React from 'react';

const FilterCafes = ({ selectedSubway, onSubwayChange }) => {
  const subwayOptions = [
    { name: "Все", code: "All" },
    { name: "Арбатская", code: "Arbat" },
    { name: "Александровский сад", code: "Alexanders Garden" },
    { name: "Московская", code: "Moscow" },
    { name: "Парк Культуры", code: "Culture" },
    { name: "Театральная", code: "Theatr" },
  ];

  return (
    <div className="controls">
      <select 
        name="subway" 
        id="subway"
        value={selectedSubway}
        onChange={(e) => onSubwayChange(e.target.value)}
      >
        {subwayOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;