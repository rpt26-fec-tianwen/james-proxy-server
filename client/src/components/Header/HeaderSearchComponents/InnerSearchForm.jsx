import React from 'react'

export default (props) => {
    const { style, handleChange } = props;
    const { innerSearchForm, searchInput } = style;
    return (
        <form className={innerSearchForm}>
            <input className={searchInput} onChange={handleChange} type='search' placeholder="Search products..."></input>
        </form>
    )
}