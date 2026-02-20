const Header = (props) => {
	return <h1>{props.name}</h1>;
};

const Content = (props) => {
	return (
		<>
			{props.parts.map((part) => (
				<Part part={part} key={part.name} />
			))}
		</>
	);
};

const Part = (props) => {
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.total}</p>;
};

const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	const total = course.parts.reduce(
		(accu, current) => accu + current.exercises,
		0,
	);

	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total total={total} />
		</div>
	);
};

export default App;
