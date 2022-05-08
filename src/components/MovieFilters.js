function MovieFilters(props) {

	const {
		filterMovie, 
		filterMovieYear, 
		yearList, 
		handleChangeTitle, 
		handleChangeYear 
	}	= props

  return (
    <div className="filter">
      <fieldset>
        <label className="filter_box" htmlFor="name">
          Wovie:
        </label>
        <input
          className="filter_box"
          type="text"
          name="text"
          id="name"
          placeholder="E.g.: Marmaduke"
          onChange={handleChangeTitle}
          value={filterMovie}
        />
      </fieldset>

      <fieldset>
        <label className="filter_box" htmlFor="year">
          {" "}
          Wear:{" "}
        </label>
        <select
          className="filter_box"
          name="year"
          id="year"
          onChange={handleChangeYear}
          value={filterMovieYear}
        >
          <option value="">All</option>
          {yearList.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </select>
      </fieldset>
    </div>
  );
}

export default MovieFilters;
