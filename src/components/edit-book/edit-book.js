import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getSingleBook, editBook } from '../../services/booksService';
 
class EditBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: parseInt(this.props.match.params.id),
            title: '',
            description: '',
            image: '',
            year: ''
        }
    }

    componentDidMount() {
        getSingleBook(this.state.id).then(book => {
            if (book) {
                this.setState({
                    title: book.title,
                    description: book.description,
                    image: book.image,
                    year: book.year
                });
            }
        })
    }

    editBook = () => {
        const book = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            year: this.state.year
        }

        editBook(book).then(res => {
            if (res.status === 200) {
                this.props.history.push('/');
            }
        })
    }

    render() {
        return (
            <div>
                <Link to="/"><Button color="secondary">Back to book's list</Button></Link>
                <div>
                    <div className="text-input">
                        <TextField label="Title" variant="outlined" sx={{ width: '25%' }} value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                    </div>
                    <div className="text-input">
                        <TextField label="Description" variant="outlined" sx={{ width: '25%' }} value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} />
                    </div>
                    <div className="text-input">
                        <TextField label="Image" variant="outlined" sx={{ width: '25%' }} value={this.state.image} onChange={(event) => this.setState({image: event.target.value})} />
                    </div>
                    <div className="text-input">
                        <TextField label="Year" variant="outlined" sx={{ width: '25%' }} value={this.state.year} onChange={(event) => this.setState({year: event.target.value})} />
                    </div>
                    <div className="text-input">
                        <Button variant="contained" sx={{ width: '25%' }} onClick={this.editBook}>Edit book</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditBook;