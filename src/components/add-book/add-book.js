import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { addBook } from '../../services/booksService';
import { useHistory } from 'react-router-dom';

import './add-book.css';

function AddBook(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [year, setYear] = useState('');
    const history = useHistory();
    
    const createBook = () => {
        const newBook = {
            title: title,
            description: description,
            image: image,
            year: parseInt(year)
        }
        
        addBook(newBook).then(res => {
            if (res.status === 200) {
                history.push('/');
            }
        });
    }

    return (
        <div>
            <Link to="/"><Button color="secondary">Back to book's list</Button></Link>
            <div>
                <div className="text-input">
                    <TextField label="Title" variant="outlined" sx={{width: '25%'}} onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div className="text-input">
                    <TextField label="Description" variant="outlined" sx={{width: '25%'}} onChange={(event) => setDescription(event.target.value)}/>
                </div>
                <div className="text-input">
                    <TextField label="Image" variant="outlined" sx={{width: '25%'}} onChange={(event) => setImage(event.target.value)}/>
                </div>
                <div className="text-input">
                    <TextField label="Year" variant="outlined" sx={{width: '25%'}} onChange={(event) => setYear(event.target.value)}/>
                </div>
                <div className="text-input">
                    <Button variant="contained" sx={{width: '25%'}} onClick={createBook}>Add new book</Button>
                </div>
            </div>
        </div>
    );
}

export default AddBook;