import React from 'react';
import Listings from './Listings';

function ListingsContainer({ listings }) {
	return (
		<div>
			{listings.map((listing) => (
				<Listings key={listing.id} listing={listing} />
			))}
		</div>
	);
}

export default ListingsContainer;
