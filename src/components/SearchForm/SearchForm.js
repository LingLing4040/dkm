import React from 'react';
// import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import { useLocation } from 'react-router-dom';

function SearchForm() {
    
   
    return (
        <div className='search-form'>
            <form
                className={`search-form__form`}
                // onSubmit={handleSubmit}
                noValidate
            >
                <label htmlFor='?' className='search-form__label'>
                    <input
                        name='?'
                        id='?'
                        type='search'
                        placeholder='Поиск'
                        className='search-form__input'
                        // required
                        // onClick={handleInputClick}
                        // onBlur={handleInputLeave}
                        // onChange={location === '/movies' ? handleKeyword : handleKeywordSaved}
                        // value={location === '/movies' ? keyword : keywordSaved}
                    />
                </label>
            </form>
        </div>
    );
}

export default SearchForm;
