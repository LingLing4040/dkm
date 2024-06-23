import React from 'react';
import imgPath from '../../images/magnifier.svg'



function SearchForm(props) {
    
   
    return (
        
        <div className='search-form'>
            {props.windowWidth > 425 && (
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
            )}
            {props.windowWidth <= 425 && (
                <img className='search-form__img' src={imgPath}></img>
            )}
        </div>
       
        
    );
}

export default SearchForm;
