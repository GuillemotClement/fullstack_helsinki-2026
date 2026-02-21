import Part from "./Part";
import Total from "./Total";

const Content = ({ course }) => {
	const { parts } = course;
	const total = parts.reduce((acc, value) => acc + value.exercises, 0);

	return (
		<>
			<div>
				{parts.map((part) => (
					<Part key={part.id} part={part} />
				))}
			</div>
			<div className="">
				<Total total={total} />
			</div>
		</>
	);
};

export default Content;
