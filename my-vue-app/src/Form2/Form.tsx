import React from "react";
import { useState } from "react";
import TemptForm from "./TemptForm";

interface Book {
	id: number;
	title: string;
	quantity: string;
}

function BookManageApp() {
	const [book, setBook] = useState({ id: 0, title: "", quantity: "" });
	const [error, setError] = useState({ title: "", quantity: "" });
	const [books, setBooks] = useState<Book[]>([]);
	// console.log(error);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const valueInput: string = e.target.value;
		const nameInput: string = e.target.name;
		setBook((preData) => ({ ...preData, [nameInput]: valueInput }));
	};

	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
		const valueInput = e.target.value;
		const nameInput: string = e.target.name;
		const currentElement = e.currentTarget;
		const parentElement = currentElement.parentElement;
		if (valueInput === "") {
			console.log(parentElement);
			parentElement?.classList.add(`text-red-500`);
			currentElement.focus();
			setError((preError) => ({ ...preError, [nameInput]: "Required" }));
			return;
		} else {
			parentElement?.classList.remove(`text-red-500`);
			setError((preError) => ({ ...preError, [nameInput]: "" }));
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!Object.values(book).includes("")) {
			setBooks((preData) => {
				if (book.id !== 0) {
					const indexBookEdited = preData.findIndex(
						(element) => element.id === book.id
					);
					console.log(preData[indexBookEdited]);
					const newBooks = [...preData];
					newBooks.splice(indexBookEdited, 1, book);
					console.log(newBooks);

					return newBooks;
				} else {
					return [
						...preData,
						{ ...book, id: Math.floor(Math.random() * 10000) },
					];
				}
			});
			setBook({ id: 0, title: "", quantity: "" });
		}
	};

	const handleEdit = (id: number) => {
		const [bookEdited] = books.filter((book) => book.id === id);

		setBook(bookEdited);
	};
	const handleDelete = (id: number) => {
		const newBooks = books.filter((book) => book.id !== id);

		setBooks(newBooks);
	};

	return (
		<div className="space-y-3" id="library_form">
			<h2 className="text-2xl font-bold text-center">Library</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col text-blue-700 w-[400px] mx-auto p-2 bg-amber-300 space-y-3"
			>
				<TemptForm
					value={book.title}
					name="title"
					type="text"
					onChange={handleChange}
					onBlur={handleBlur}
					error={error.title}
				/>
				<TemptForm
					value={book.quantity}
					name="quantity"
					type="number"
					onChange={handleChange}
					onBlur={handleBlur}
					error={error.quantity}
				/>
				<button className="px-2 py-[2px] bg-red-400 rounded-md">Add</button>
			</form>

			<table className="w-[400px] mx-auto p-3 border">
				<thead>
					<tr>
						<th>Title</th>
						<th>Quantity</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody className="text-center space-y-2">
					{books.map((book) => (
						<tr key={book.id}>
							<td>{book.title}</td>
							<td>{book.quantity}</td>
							<td className="flex justify-evenly">
								<button onClick={() => handleEdit(book.id)}>Edit</button>
								<button onClick={() => handleDelete(book.id)}>Delete</button>
							</td>
						</tr>
					)) ?? undefined}
				</tbody>
			</table>
		</div>
	);
}

export default BookManageApp;
