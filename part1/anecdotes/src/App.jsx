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

	const generateRandomNumber = () => {
		return Math.floor(Math.random() * anecdotes.length);
	};

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

	return (
		<div>
			<div className="">{anecdotes[selected]}</div>

			<p>has {votes[anecdotes[selected]] || 0} votes</p>

			<button type="button" onClick={() => handleVote(anecdotes[selected])}>
				Vote
			</button>

			<button type="button" onClick={handleDisplayRandom}>
				next anecdote
			</button>
		</div>
	);
};

export default App;
