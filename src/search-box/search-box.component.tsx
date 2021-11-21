import React, {useEffect, useRef} from 'react';
import { TextField} from "@material-ui/core";
import { ArrowLeft, ArrowRight, Clear } from '@material-ui/icons';
import './search-box.component.css';

const SearchBox = ({ showAndFocus, onSearchChanged, onPrevClicked, onNextClicked, onSearchCleared }) => {
    const ref: any = useRef();

    useEffect(() => {
        if (ref) {
            ref.current.focus();
        }
    }, [showAndFocus])

    let triggerTimeout: any;
    const onChange = (e: any) => {
        if (triggerTimeout) {
            clearTimeout(triggerTimeout);
        }
        triggerTimeout = setTimeout(() => {
            onSearchChanged(e.target.value);
        }, 300);
    }

    const clear = () => {
        if (ref) {
            ref.current.value = '';
        }
        onSearchCleared();
    }

    return (
        <div className='search-app__search-box-container'>
            <TextField
                placeholder="Search..."
                type="search"
                variant="outlined"
                onChange={onChange}
                autoFocus
                size='small'
                inputRef={ref}
            />
            <ArrowLeft onClick={onPrevClicked} fontSize='large'/>
            <ArrowRight onClick={onNextClicked} fontSize='large'/>
            <Clear onClick={clear} fontSize='large'/>
        </div>
    )
}

export default SearchBox;
