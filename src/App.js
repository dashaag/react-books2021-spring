import './App.css';
import GetBooks from './components/get-books/get-books';
import AddBook from './components/add-book/add-book';
import EditBook from './components/edit-book/edit-book';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <GetBooks />
          </Route>
          <Route exact path="/add-book">
            <AddBook />
          </Route>
          <Route exact path="/edit-book/:id" component={EditBook}/>
          <Route path="*" children={() => <h1>404 Not Found</h1>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
