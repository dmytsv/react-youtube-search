import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = ({ target: { value } }) => {
    // this.props.onSearchTermChange(term);
    this.setState({ term: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Video Search Bar"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
