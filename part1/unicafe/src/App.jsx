import { useState } from "react";

const Title = ({ text }) => {
	return <h2>{text}</h2>;
};

const Button = ({ text, onClick }) => {
	return (
		<button type="button" onClick={onClick}>
			{text}
		</button>
	);
};

const Result = ({ text, result }) => {
	return (
		<p>
			{text} {result}
		</p>
	);
};

const App = () => {
	// enregistrer les clics de chaque bouton dans un état différent
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleClickGood = () => {
		setGood(good + 1);
	};
	const handleClickNeutral = () => {
		setNeutral(neutral + 1);
	};
	const handleClickBad = () => {
		setBad(bad + 1);
	};

	const total = good + neutral + bad;

	const average = total === 0 ? 0 : (good - bad) / total;

	const positif = total === 0 ? 0 : (good / total) * 100;

	return (
		<div>
			<Title text="give feedback" />
			<div className="">
				<Button text="good" onClick={handleClickGood} />
				<Button text="neutral" onClick={handleClickNeutral} />
				<Button text="bad" onClick={handleClickBad} />
			</div>
			<Title text="statistics" />
			<div className="">
				<Result text="good" result={good} />
				<Result text="neutral" result={neutral} />
				<Result text="bad" result={bad} />
				<Result text="all" result={total} />
				<Result text="average" result={average} />
				<Result text="positif" result={positif} />
			</div>
		</div>
	);
};

export default App;
