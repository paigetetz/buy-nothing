import '../App.css';
import React, { useState, useEffect } from 'react';
import NotFound from './NotFound';
import Comments from './Comments';
import CommentsContainer from './CommentsContainer';
import Events from './Events';
import EventsContainer from './EventsContainer';
import Listings from './Listings';
import ListingsContainer from './ListingsContainer';
import NavBar from './NavBar';
import UserLogin from './UserLogin';
import UserLogout from './UserLogout';
import UserProfile from './UserProfile';
import UserSignup from './UserSignup';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [user, setUser] = useState(null);
	const [events, setEvents] = useState('');
	const [listings, setListings] = useState('');

	useEffect(() => {
		fetch(`/me`)
			.then((response) => response.json())
			.then((data) => setUser(data));
	}, []);

	useEffect(() => {
		(async () => {
			const response1 = await fetch('/events');
			const events = await response1.json();
			console.log(events);

			const response2 = await fetch('/listings');
			const listings = await response2.json();
			setListings(listings);
		})();
	}, []);

	return (
		<div className='App'>
			<NavBar user={user} setUser={setUser} />
			<Routes>
				<Route exact path='/' element={<UserLogin onLogin={setUser} />} />
				<Route
					exact
					path='/signup'
					element={<UserSignup onSignup={setUser} />}
				/>
				<Route
					path='/logout'
					element={<UserLogout user={user} setUser={setUser} />}
				/>
				<Route path='/profile' element={<UserProfile user={user} />} />
				<Route
					path='/listings'
					element={<ListingsContainer user={user} listings={listings} />}
				/>
				<Route
					path='/events'
					element={<EventsContainer user={user} events={events} />}
				/>
				<Route
					path='/comments'
					element={<CommentsContainer user={user} setUser={setUser} />}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
