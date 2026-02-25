import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newTel, setNewTel] = useState("");
	const [searchName, setSearchName] = useState("");
	const [showAll, setShowAll] = useState(true);

	useEffect(() => {
		personService.getAll().then((initialPerson) => setPersons(initialPerson));
	}, []);

	const addNumber = (event) => {
		event.preventDefault();

		const person = persons.find(
			(p) => p.name.toLocaleLowerCase() === newName.toLocaleLowerCase(),
		); // retourne user de la liste

		// si on as une personne de trouver, on passe dans le demande de confirm pour update le numéro de tel
		if (person) {
			if (
				confirm(
					`${newName} is already added to phonebook, replace the old number with a new one ?`,
				)
			) {
				// on récupère l'objet person avec la nouvelle valeur pour le numéro
				const changedPerson = { ...person, number: newTel };

				// on viens update cette personne
				personService
					.updatePerson(person.id, changedPerson)
					.then((returnedPerson) => {
						setPersons(
							// on change le state pour obtenir l'utpdate de la person
							persons.map((person) =>
								person.id !== returnedPerson.id ? person : returnedPerson,
							),
						);
						// on vide le formulaire
						setNewName("");
						setNewTel("");
					})
					.catch((err) => {
						alert(`the person ${person.name} failed update : `, err);
					});
			}
			return; // on termine la fonction pour ne pas ajouter un nouvel utilisateur en double
		}

		const nextId = persons.length + 1;

		const personName = {
			name: newName,
			number: newTel,
			id: String(nextId),
		};

		personService.create(personName).then((returnedPerson) => {
			setPersons(persons.concat(returnedPerson));
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

	const personsToShow = showAll
		? persons
		: persons.filter((person) =>
				person.name.toLowerCase().includes(searchName.toLocaleLowerCase()),
			);

	const handleDelete = (person) => {
		if (confirm(`Delete ${person.name} ?`)) {
			personService
				.deletePerson(person.id)
				.then(() => {
					setPersons(persons.filter((p) => p.id !== person.id));
				})
				.catch((err) => console.error(err));
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>

			<div className="">
				<Filter handleSearchName={handleSearchName} searchName={searchName} />
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
				<Persons key={person.id} person={person} handleDelete={handleDelete} />
			))}
		</div>
	);
};

export default App;
