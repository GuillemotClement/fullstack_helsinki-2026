const Filter = (props) => {
	return (
		<>
			<p>Filter shown with</p>
			<input
				type="text"
				value={props.searchName}
				onChange={props.handleSearchName}
			/>
			<button type="button" onClick={props.handleResetSearch}>
				Reset
			</button>
		</>
	);
};

export default Filter;
