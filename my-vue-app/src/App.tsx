import "tailwindcss/tailwind.css";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<div>
			<div id="sidebar">
				<h1> Router LAB 5</h1>
				<nav className="my-4">
					<ul className="flex justify-evenly">
						<li className="px-2 py-[2px] bg-blue-500 rounded-md text-white">
							<Link to={`/contact_form`}> Contact Form</Link>
						</li>
						<li className="px-2 py-[2px] bg-blue-500 rounded-md text-white">
							<Link to={`/library_form`}>Library Form</Link>
						</li>
						<li className="px-2 py-[2px] bg-blue-500 rounded-md text-white">
							<Link to={`/mail_form`}>Mail Form</Link>
						</li>
						<li className="px-2 py-[2px] bg-blue-500 rounded-md text-white">
							<Link to={`/login`}>Login Form</Link>
						</li>
						<li className="px-2 py-[2px] bg-blue-500 rounded-md text-white">
							<Link to={`/book`}>Book App</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail" className="mt-6">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
