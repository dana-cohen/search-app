import React, {useEffect, useState} from 'react';
import UploadFile from "../upload-file/upload-file.component";
import TextLayout from "../text-layout/text-layout.component";
import SearchBox from "../search-box/search-box.component";
import './page-body.component.css';

const PageBody = () => {
    const [text, setText] = useState('');
    const [showSearchBox, setShowSearchBox] = useState({ showAndFocus: false });
    const [searchString, setSearchString] = useState('');
    const [activeHighlightedIndex, setActiveHighlightedIndex] = useState(0);
    const [numOfHighlights, setNumOfHighlights] = useState(0);

    const registerToEvents = () => {
        window.addEventListener('keydown',(event: KeyboardEvent) => {
            const keyName: string = event.key;
            if (event.ctrlKey && (keyName === 'f' || keyName === 'F')) {
                event.stopPropagation();
                event.preventDefault();
                setShowSearchBox({ showAndFocus: true });
            }
        })
    }

    useEffect(() => {
        registerToEvents();
    }, []);

    //upload new file reset
    useEffect(() => {
        setSearchString('');
        setActiveHighlightedIndex(0);
    }, [text]);

    useEffect(() => {
        setNumOfHighlights(document.querySelectorAll('.search-app__highlight').length);
    }, [searchString]);

    return (
        <div className='search-app__body-container'>
            <UploadFile onTextChanged={setText}/>
            {showSearchBox.showAndFocus && <SearchBox
                    showAndFocus={showSearchBox}
                    onSearchChanged={setSearchString}
                    onPrevClicked={() => setActiveHighlightedIndex(prevState => prevState === 0 ? numOfHighlights - 1 : prevState - 1)}
                    onNextClicked={() => setActiveHighlightedIndex(prevState => prevState + 1 === numOfHighlights ? 0 : prevState + 1)}
                    onSearchCleared={() => setSearchString('')}
                />}
            <TextLayout
                activeHighlightedIndex={activeHighlightedIndex}
                searchString={searchString}
                textToHighlight={text}
            />
        </div>
    )
}

export default PageBody;
