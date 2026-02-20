const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Content = (props) => {
	return (
		<div className="">
			<Part part={props.part.part1} exercises={props.part.exercises1} />
			<Part part={props.part.part2} exercises={props.part.exercises2} />
			<Part part={props.part.part3} exercises={props.part.exercises3} />
		</div>
	);
};

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.total}</p>;
};

const App = () => {
	const course = "Half Stack application development";

	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	const part = {
		part1,
		part2,
		part3,
		exercises1,
		exercises2,
		exercises3,
	};

	return (
		<div>
			<Header course={course} />
			<Content part={part} />
			<Total total={exercises1 + exercises2 + exercises3} />
		</div>
	);
};

export default App;
