const PersonForm = (props) => {
	return (
		<form onSubmit={props.addNumber}>
			<div>
				name:{" "}
				<input
					onChange={props.handleNameChange}
					value={props.newName}
					required
				/>
			</div>
			<div className="">
				<label htmlFor="">Number : </label>
				<input
					type="tel"
					onChange={props.handleTelChange}
					value={props.newTel}
					required
				/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
