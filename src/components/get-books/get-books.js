import React from 'react';
import { getBooks, deleteBook } from '../../services/booksService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

class GetBooks extends React.Component {
    constructor() {
        super();

        this.state = {
            books: []
        };
    }

    componentDidMount() {
        getBooks().then(books => {
            this.setState({
                books: books
            });
        });
    }

    deleteBook(id) {
        deleteBook(id).then(res => {
            if (res.status === 200) {
                getBooks().then(books => {
                    this.setState({
                        books: books
                    });
                });
            }
        })
    }

    render() {
        return (
            <div>
                <Grid item xs={12} md={6}>
                    <Link to="/add-book"><Button color="secondary">Create new book</Button></Link>
                    <List>
                        {this.state.books.map(book =>
                            <div>
                                <ListItem
                                    secondaryAction={
                                        <Fragment>
                                            <Link to={`/edit-book/${book.id}`}>
                                                <IconButton 
                                                    edge="end"  
                                                    aria-label="edit">
                                                    <EditOutlinedIcon />
                                                </IconButton>
                                            </Link>
                                            <IconButton 
                                                edge="end"  
                                                aria-label="delete"
                                                onClick={() => this.deleteBook(book.id)}>
                                                <DeleteOutlinedIcon />
                                            </IconButton>
                                        </Fragment>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar
                                            src={book.image}
                                            sx={{ width: 60, height: 60,
                                            marginRight: 3}}>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={book.title}
                                    />
                                </ListItem>
                                <Divider />
                            </div>
                        )}
                    </List>
                </Grid>
            </div>
        );
    }
}

export default GetBooks;