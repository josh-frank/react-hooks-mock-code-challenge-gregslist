import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [ listings, setListings ] = useState( [] );
  const [ favorites, setFavorites ] = useState( [] );
  const [ searchQuery, setSearchQuery ] = useState( "" );

  useEffect( () => {
    fetch( "http://localhost:6001/listings" ).then( response => response.json() ).then( setListings );
  }, [] );

  const filteredListings = listings.filter( listing => listing.description.toLowerCase().includes( searchQuery.toLowerCase() ) );

  return (
    <div className="app">
      <Header searchQuery={ searchQuery } setSearchQuery={ setSearchQuery } />
      <ListingsContainer allListings={ listings } filteredListings={ filteredListings } setListings={ setListings } favorites={ favorites } setFavorites={ setFavorites } />
    </div>
  );

}

export default App;
