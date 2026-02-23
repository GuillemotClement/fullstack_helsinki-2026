import React from "react";

const Persons = (props) => {
	return (
		<p>
			{props.person.name} - {props.person.tel}
		</p>
	);
};

export default Persons;
