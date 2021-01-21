import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState( { term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
        // TODO: Make sure we call callback from parent component
    };

    render() {
        return (
        <div className="search-bar ui segment ">
            <form action="" className="ui form" onSubmit={ this.onFormSubmit }>
                <div className="field">
                    <label htmlFor="search__input">Video Search</label>
                    <input
                    type="text"
                    id="search__input"
                    value={ this.state.term }
                    onChange={ this.onInputChange }
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;