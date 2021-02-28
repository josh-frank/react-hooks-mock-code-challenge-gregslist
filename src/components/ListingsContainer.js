import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { allListings, filteredListings, setListings, favorites, setFavorites } ) {

  return (
    <main>
      <ul className="cards">
        { filteredListings.map( listing => <ListingCard key={ listing.id } listing={ listing } allListings={ allListings } setListings={ setListings } favorites={ favorites } setFavorites={ setFavorites } /> ) }
      </ul>
    </main>
  );

}

export default ListingsContainer;
