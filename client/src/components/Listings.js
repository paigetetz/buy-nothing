import React from 'react';

function Listings({ listing }) {
	return (
		<div>
			<h2>{listing.image_url}</h2>
			<h2>{listing.name}</h2>
			<h2>{listing.description}</h2>
			<h3>{listing.location}</h3>
		</div>
	);
}

export default Listings;
