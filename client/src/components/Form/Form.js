import React from "react";

function Form(props) {
    return(
        <div id="searchContainer">
            <h3>Search For A Book</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter a book title</label>
                <br></br>
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title (required)" />
                <br></br>
                <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}

export default Form;