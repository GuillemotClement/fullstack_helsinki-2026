import Content from "./Content";
import Header from "./Header";

const Course = ({ course }) => {
	return (
		<div>
			<Header text={course.name} />
			<div className="">
				<Content course={course} />
			</div>
		</div>
	);
};

export default Course;
