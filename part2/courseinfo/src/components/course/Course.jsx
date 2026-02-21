import Content from "./Content";
import Header from "./Header";

const Course = ({ courses }) => {
	return (
		<div>
			<h1>Web development curriculum</h1>
			{courses.map((course) => (
				<div className="" key={course.id}>
					<Header text={course.name} />
					<div className="">
						<Content course={course} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Course;
