import { useState } from "react";

const Statistics = ({ stats }) => {
	const { good, neutral, bad, total, average, positif } = stats;

	if (total === 0) {
		return <p>No feedback given</p>;
	}

	return (
		<>
			<StatisticsLine text="good" value={good} />
			<StatisticsLine text="neutral" value={neutral} />
			<StatisticsLine text="bad" value={bad} />
			<StatisticsLine text="all" value={total} />
			<StatisticsLine text="average" value={average} />
			<StatisticsLine text="positif" value={positif} />
		</>
	);
};

const Button = ({ text, onClick }) => {
	return (
		<button type="button" onClick={onClick}>
			{text}
		</button>
	);
};

const StatisticsLine = ({ text, value }) => {
	const arrondi = Math.round(value * 100) / 100;
	return (
		<table>
			<tbody>
				<tr>
					<td>{text}</td>
					<td>{text === "positif" ? `${arrondi} %` : arrondi}</td>
				</tr>
			</tbody>
		</table>
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

	const stats = {
		total,
		average,
		positif,
		good,
		neutral,
		bad,
	};

	return (
		<div>
			<h1>Give Feedback !</h1>
			<div className="">
				<Button text="good" onClick={handleClickGood} />
				<Button text="neutral" onClick={handleClickNeutral} />
				<Button text="bad" onClick={handleClickBad} />
			</div>
			<h2>statistics</h2>
			<div className="">
				<Statistics stats={stats} />
			</div>
		</div>
	);
};

export default App;
