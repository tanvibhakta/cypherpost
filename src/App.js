import './App.css';
import {ProfilePicture} from "./components/ProfilePicture";
import {Tabs, Tab} from "./components/Tabs";

function App() {
  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <div className="container p-4 max-w-xl flex flex-col items-center justify-center">
      <ProfilePicture name="Monkey D Luffy"/>
        <div className="pb-4 font-bold">Monkey D Luffy</div>
        <div className="stats flex justify-between w-full p-4 px-8 text-xs">
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
    </div>
  );
}

export default App;
