import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", tel: "0645231586" },
	]);
	const [newName, setNewName] = useState("");
	const [newTel, setNewTel] = useState("");

	const addNumber = (event) => {
		event.preventDefault();

		let isExist = false;

		persons.forEach((person) => {
			if (person.name === newName) {
				alert(`${newName} is already added to phonebook`);
				isExist = true;
				setNewName("");
				setNewTel("");
			}
		});

		if (isExist) {
			return;
		}

		const personName = {
			name: newName,
			tel: newTel,
		};

		setPersons(persons.concat(personName));
		setNewName("");
		setNewTel("");
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleTelChange = (event) => {
		setNewTel(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addNumber}>
				<div>
					name: <input onChange={handleNameChange} value={newName} required />
				</div>
				<div className="">
					<label htmlFor="">Number : </label>
					<input
						type="tel"
						onChange={handleTelChange}
						value={newTel}
						required
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<p key={person.name}>
					{person.name} - {person.tel}
				</p>
			))}
		</div>
	);
};

export default App;
