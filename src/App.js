import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';

const App = () => {
	const [ country, setCountery ] = useState('india');
	const [ data, setData ] = useState(null);
	useEffect(
		() => {
			const get_axios = async () => {
				const res = await axios.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
				console.log(res.data[0]);
				setData(res.data[0]);
			};
			get_axios();
		},
		[ country ]
	);
	return (
		<div>
			<div className="dir">
				search country<p>⬇️</p>
			</div>
			<div>
				<input
					className="inpfield"
					placeholder="search..."
					type="text"
					value={country}
					onChange={(e) => setCountery(e.target.value)}
				/>
			</div>
			<div className="card">
				{!data ? (
					<h1 className="not_found">country is not found</h1>
				) : (
					<article className="card">
						<div className="card-body">
							<img src={data.flag} alt="" className="card-body-img" />
							<h1 className="card-body-title">
								{data.name}
								<span />
							</h1>
							<p className="card-body-text"> capital : {data.capital}</p>
						</div>
						<div className="card-footer">
							<div className="card-footer-social">
								<h3>{data.nativeName}</h3>
								<p>Native Language</p>
							</div>
							<div className="card-footer-social">
								<h3>{data.population}</h3>
								<p>Population</p>
							</div>
							<div className="card-footer-social">
								<h3>{data.demonym}</h3>
								<p>Demonym</p>
							</div>
						</div>
					</article>
				)}
			</div>
		</div>
	);
};

export default App;
