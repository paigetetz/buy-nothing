import React from 'react';
import Events from './Events';

function EventsContainer({ user, events }) {
	console.log(events);

	return (
		<div>
			{events.map((event) => (
				<Events key={event.id} event={event} user={user} />
			))}
		</div>
	);
}

export default EventsContainer;
