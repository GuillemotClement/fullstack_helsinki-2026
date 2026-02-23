const Filter = (props) => {
	return (
		<>
			<p>Filter shown with</p>
			<input
				type="text"
				value={props.searchName}
				onChange={props.handleSearchName}
			/>
		</>
	);
};

export default Filter;
