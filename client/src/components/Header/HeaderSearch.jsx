import React, { useState, useEffect } from 'react';
import axios from 'axios';

import InnerSearchForm from './HeaderSearchComponents/InnerSearchForm.jsx';
import SearchResults from './HeaderSearchComponents/SearchResults/SearchResults.jsx'
export default (props) => {
    const { styles } = props;
    const { headerSearchRoot, searchRoot } = styles;
    
    const [allSearchImages, setAllSearchImages] = useState([]);
    const [searchImages, setSearchImages] = useState([]);
    
    useEffect(async () => {
        const results = await axios(`/images/all`);
        setAllSearchImages(results.data[0]);
      }, []);

    const sixImagesCallback = (event) => {
        const sixImages = allSearchImages.filter((image) => {return image.title.toUpperCase().includes(event.target.value.toUpperCase())}).slice(0, 6);
        setSearchImages(sixImages);
    }

    return (
        <div className={headerSearchRoot} id='headerSearchRoot'>
            <div className={searchRoot}>
                <InnerSearchForm handleChange={sixImagesCallback} style={styles} />
                <SearchResults searchImages={searchImages} style={styles} />
            </div>
        </div>
    )
}