import React from 'react';
import './text-layout.component.css';
import Highlighter from "react-highlight-words";

const TextLayout = ({ searchString, textToHighlight, activeHighlightedIndex }) => {

    return (
        <div className='search-app__text-container'>
            <Highlighter
                highlightClassName='search-app__highlight'
                activeClassName='search-app__highlight-active'
                searchWords={[searchString]}
                caseSensitive={false}
                textToHighlight={textToHighlight}
                activeIndex={activeHighlightedIndex}
            />
        </div>
    );
}

export default TextLayout;
