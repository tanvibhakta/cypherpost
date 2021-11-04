import logo from './logo.svg';
import './App.css';
import {ProfilePicture} from "./components/ProfilePicture";
import {Tabs} from "./components/Tabs";

function App() {
  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center">
      <ProfilePicture size="small"/>
        <div>Monkey D Luffy</div>
        <div>
            <div>
                Trusted By: 120
            </div>
            <div>
                Active Offers: 155
            </div>
            <div>
                Posts: 141
            </div>
        </div>
        <Tabs>
            <div label="Gator">
                See ya later, <em>Alligator</em>!
            </div>
            <div label="Croc">
                After 'while, <em>Crocodile</em>!
            </div>
            <div label="Sarcosuchus">
                Nothing to see here, this tab is <em>extinct</em>!
            </div>
        </Tabs>
    {/*    Tab */}
    {/*    Cards */}
    </div>
  );
}

export default App;
