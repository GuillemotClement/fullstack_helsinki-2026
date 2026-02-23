import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newTel, setNewTel] = useState("");
	const [searchName, setSearchName] = useState("");
	const [showAll, setShowAll] = useState(true);

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPersons(response.data);
		});
	}, []);

	const addNumber = (event) => {
		const url = "http://localhost:3001/persons";

		event.preventDefault();

		// some() => retourne True si un élément valide la condition
		// si le nom saisis est déjà présent dans le tableau, on retourne true
		const isExist = persons.some((person) => person.name === newName);

		// si le nom est présent, on affiche une alerte, on vide les inputs et on stop la fonction
		if (isExist) {
			alert(`${newName} is already added to phonebook`);
			setNewName("");
			setNewTel("");
			return;
		}

		const nextId = persons.length + 1;

		const personName = {
			name: newName,
			number: newTel,
			id: String(nextId),
		};

		axios
			.post(url, personName)
			.then((response) => {
				setPersons(persons.concat(response.data));
			})
			.catch((error) => {
				console.log(error);
			});

		setNewName("");
		setNewTel("");
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleTelChange = (event) => {
		setNewTel(event.target.value);
	};

	const handleSearchName = (event) => {
		setShowAll(false);
		setSearchName(event.target.value);
	};

	const handleResetSearch = () => {
		setSearchName("");
		setShowAll(true);
	};

	const personsToShow = showAll
		? persons
		: persons.filter((person) => person.name === searchName);

	return (
		<div>
			<h2>Phonebook</h2>

			<div className="">
				<Filter
					handleSearchName={handleSearchName}
					handleResetSearch={handleResetSearch}
					searchName={searchName}
				/>
			</div>

			<PersonForm
				addNumber={addNumber}
				handleNameChange={handleNameChange}
				newName={newName}
				newTel={newTel}
				handleTelChange={handleTelChange}
			/>

			<h2>Numbers</h2>
			{personsToShow.map((person) => (
				<Persons key={person.id} person={person} />
			))}
		</div>
	);
};

export default App;
