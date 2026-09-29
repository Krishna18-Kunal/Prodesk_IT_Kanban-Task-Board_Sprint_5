function SearchBar({
  search,
  onSearchChange
}) {
  return (
    <div className="search-wrapper">

      <span className="search-icon">
        🔎
      </span>

      <input
        type="text"
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        placeholder="Search tasks..."
      />

      {search && (
        <button
          className="clear-search"
          onClick={() => onSearchChange("")}
        >
          ×
        </button>
      )}

    </div>
  );
}

export default SearchBar;