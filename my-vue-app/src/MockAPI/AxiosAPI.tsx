/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { useEffect, useState } from "react";

const AxiosAPI = () => {
	const [persons, setPersons] = useState([]);
	useEffect(() => {
		// axios
		// 	.get("https://8c22c204b3474980b549d26caf5ab0eb.api.mockbin.io/")
		// 	.then((res) => {
		// 		setPersons(res.data);
		// 	})
		// 	.catch((err) => {
		// 		throw err;
		// 	});
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://8c22c204b3474980b549d26caf5ab0eb.api.mockbin.io/"
				);
				const data = response.data;
				setPersons(data);
			} catch (err) {
				console.log("throw error", err);
			}
		};
		void fetchData();
	}, [persons]);

	return (
		<ul className="space-y-3">
			{persons.map((person) => {
				return (
					<li key={person.id} className="flex">
						<div>
							<img
								src="https://images.viblo.asia/avatar/d3fbbb69-55f2-4530-99de-de866b71e9d8.png"
								alt="logo"
							/>
						</div>
						<div className="flex grow flex-col">
							<h2 className="text-2xl font-bold">{person.title}</h2>
							<p>{person.transliterated}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default AxiosAPI;
