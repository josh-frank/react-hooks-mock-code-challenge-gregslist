import React from "react";

function Search( { searchQuery, setSearchQuery } ) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={ searchQuery }
        onChange={ change => setSearchQuery( change.target.value ) }
      />
      <button type="submit">🔍</button>
    </form>
  );

}

export default Search;
