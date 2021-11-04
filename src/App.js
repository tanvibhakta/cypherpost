import logo from './logo.svg';
import './App.css';
import {ProfilePicture} from "./components/ProfilePicture";

function App() {
  return (
    <div className="App">
      <ProfilePicture/>
      <ProfilePicture size="small"/>
    </div>
  );
}

export default App;
