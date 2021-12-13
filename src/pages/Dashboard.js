import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListCard from '../components/ListCard';

export const MOCK_DATA = [
	{
		strContent: 'Enter Title Here\n\nFirst Item\n\nSecond Item\n\nThird Item',
		userID: 'dfsdfj',
		userName: 'Lan',
		postID: 'dfsd',
	},
];

const url = `http://localhost:4000`;

function Dashbroad() {
	const [lists, setLists] = useState([]);

	useEffect(() => {
		// Get all lists
		axios
			.get(url)
			.then(function (response) {
				setLists(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, [lists]);

	if (!lists) return null;

	return (
		<div className="PageWrapper">
			<h1>Dashboard</h1>
			<div className="card-container">
				{lists && lists.map((list, i) => <ListCard list={list} key={i} />)}
			</div>
		</div>
	);
}

export default Dashbroad;
