import React from "react";
import { useGlobalContext } from "./context";


const SearchForm = () => {
  const { query, handleSearch, loading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <div>
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
    <div className="btn-container">
      <button disabled={loading} onClick={() => handlePage("dec")}>
        last
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={loading} onClick={() => handlePage("inc")}>
        next
      </button>
    </div>
  
    </div>
  );


};



export default SearchForm;
