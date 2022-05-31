import React, { useState } from "react";

const SearchBar = ( {onSubmit} ) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleChange = (e) => {
   setSearchTerm(e.target.value)
  }

  const onKeyPress = (e) => {
     if(e.key === "Enter") {
       onSubmit(searchTerm);
     }
  }

  return (
    <div className="mt-4 mb-4">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search..." 
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default SearchBar;
