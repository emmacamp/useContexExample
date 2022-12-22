// styeles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Profile from './components/Profile';
import UserList from './components/UserList';

//context
import UserState from './context/User/UserState';


function App() {
  return (
    <div className="App">
      <UserState>
        <Profile />
        <UserList />
      </UserState>
    </div>
  );
}

export default App;
