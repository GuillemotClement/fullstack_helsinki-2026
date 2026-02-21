import { useState } from "react";

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
	];

	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState({});

	const generateRandomNumber = () =>
		Math.floor(Math.random() * anecdotes.length);

	const handleDisplayRandom = () => {
		const randomNumber = generateRandomNumber();
		setSelected(randomNumber);
	};

	const handleVote = (index) => {
		// on passe l'index d'élément
		const copy = { ...votes }; // on créer la copie du state
		copy[index] = (copy[index] || 0) + 1; // si pas valeur on lui passe 0 sinon on lui passe +1
		setVotes(copy); // on passe la copy dans le state
	};

	const allVoteCounts = Object.values(votes); // on obtient un tableau avec les valeurs de l'objet
	const maxVotes = allVoteCounts.length === 0 ? 0 : Math.max(...allVoteCounts); // on recupère la valeur max

	// on transforme les clé de l'objet en tableau 
	// .find => prend en argument la clé une par une 
	// on cherche pour chaque clé de l'objet, si la valeur est égale à la valeur max du vote 
	// on retourne directement l'anecdate dans la vriable
	const winnerText = Object.keys(votes).find((key) => votes[key] === maxVotes); // on récupère l'anecdote avec la meilleur note

	return (
		<div>
			<h2>Anecdote of the day</h2>
			<Anecdote text={anecdotes[selected]} />

			<p>has {votes[anecdotes[selected]] || 0} votes</p>

			<Button text="Vote" handleClick={() => handleVote(anecdotes[selected])} />
			<Button text="Next anecdote" handleClick={handleDisplayRandom} />

			<h2>Anecdote with most value</h2>
			<Anecdote text={winnerText} />
		</div>
	);
};

const Anecdote = ({ text }) => {
	return <p>{text}</p>;
};

const Button = ({ text, handleClick }) => {
	return (
		<button type="button" onClick={handleClick}>
			{text}
		</button>
	);
};

export default App;
