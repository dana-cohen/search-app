import React, {useState} from 'react';
import { Button } from '@material-ui/core'

const UploadFile = ({ onTextChanged }) => {
    const [text, setText] = useState('Upload File');

    const updateFile = (e: any) => {
        setText('Switch File');
        e.target.files[0]?.text().then((t: string) => onTextChanged(t));
    }

    return (
        <Button variant="contained" component="label">{text}
            <input type="file" hidden onChange={updateFile} accept=".txt" />
        </Button>
    );
}

export default UploadFile;
