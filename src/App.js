import logo from './logo.svg';
import './App.css';
import {ProfilePicture} from "./components/ProfilePicture";
import {Tabs, Tab} from "./components/Tabs";

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
            <Tab label="Gator">
                See ya later, <em>Alligator</em>!
            </Tab>
            <Tab label="Croc">
                After 'while, <em>Crocodile</em>!
            </Tab>
            <Tab label="Sarcosuchus">
                Nothing to see here, this tab is <em>extinct</em>!
            </Tab>
        </Tabs>
    {/*    Tab */}
    {/*    Cards */}
    </div>
  );
}

export default App;
