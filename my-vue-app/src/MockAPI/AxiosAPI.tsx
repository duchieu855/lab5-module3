/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { useEffect, useState } from "react";

interface StyleData {
	map(
		arg0: (item: StyleData) => import("react/jsx-runtime").JSX.Element
	): import("react").ReactNode;
	id: number;
	title: string;
	slug: string;
	category_id: number;
	published_at: string;
	system: string;
	transliterated: string;
	category: {
		id: number;
		slug: string;
		created_at: string;
		updated_at: string;
		system: boolean;
	};
}

const AxiosAPI = () => {
	const [data, setData] = useState<StyleData[]>([]);
	useEffect(() => {
		// axios
		// 	.get("https://8c22c204b3474980b549d26caf5ab0eb.api.mockbin.io/")
		// 	.then((res) => {
		// 		setData(res.data);
		// 	})
		// 	.catch((err) => {
		// 		throw err;
		// 	});
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://8c22c204b3474980b549d26caf5ab0eb.api.mockbin.io/"
				);
				const data: StyleData[] = response.data;
				setData(data);
			} catch (err) {
				console.log("throw error", err);
			}
		};
		void fetchData();
	}, [data]);

	return (
		<ul className="space-y-3">
			{data.map((item: StyleData) => {
				return (
					<li key={item.id} className="flex">
						<div>
							<img
								src="https://images.viblo.asia/avatar/d3fbbb69-55f2-4530-99de-de866b71e9d8.png"
								alt="logo"
							/>
						</div>
						<div className="flex grow flex-col">
							<h2 className="text-2xl font-bold">{item.title}</h2>
							<p>{item.transliterated}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default AxiosAPI;
