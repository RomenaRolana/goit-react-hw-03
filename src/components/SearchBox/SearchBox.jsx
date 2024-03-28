import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.searchBox}>
      <p className={css.searchBoxName}>Search:</p>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        className={css.searchInput}
      />
    </div>
  );
};

export default SearchBox;
