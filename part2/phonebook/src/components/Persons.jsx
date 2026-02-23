const Persons = (props) => {
	return (
		<div className="">
			<p>
				{props.person.name} - {props.person.number}
			</p>
			<button onClick={() => props.handleDelete(props.person)} type="button">
				Delete
			</button>
		</div>
	);
};

export default Persons;
