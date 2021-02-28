import React from "react";

function ListingCard( { listing, allListings, setListings, favorites, setFavorites } ) {

  const { id, description, image, location } = listing;

  const isFavorite = !!favorites.find( favorite => favorite.id === id );

  function toggleFavorites() {
    setFavorites( isFavorite ? favorites.filter( favorite => favorite.id !== id ) : [ ...favorites, listing ] );
  }
  
  function deleteListing() {
    fetch( `http://localhost:6001/listings/${ id }`, { method: "DELETE" } );
    setListings( allListings.filter( listing => listing.id !== id ) );
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ image } alt={ description } />
      </div>
      <div className="details">
        { isFavorite ? (
          <button className="emoji-button favorite active" onClick={ toggleFavorites }>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={ toggleFavorites }>☆</button>
        ) }
        <strong>{ description }</strong>
        <span> · { location }</span>
        <button className="emoji-button delete" onClick={ deleteListing }>🗑</button>
      </div>
    </li>
  );

}

export default ListingCard;
