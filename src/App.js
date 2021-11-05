import './App.css';
import {ProfilePicture} from "./components/ProfilePicture";
import {Tabs, Tab} from "./components/Tabs";
import {Card} from "./components/Card";

function App() {
  return (
    <div className="min-h-screen h-full bg-gray-900 text-gray-100 flex items-center justify-center">
        <div className="container p-4 max-w-xl flex flex-col items-center justify-center">
      <ProfilePicture name="Monkey D Luffy"/>
        <div className="pb-4 font-bold">Monkey D Luffy</div>
        <div className="stats flex justify-around w-full p-4 px-8 text-xs">
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
                <Card/>
                <Card/>
            </Tab>
            <Tab label="Croc">
                After 'while, <em>Crocodile</em>!
            </Tab>
            <Tab label="Sarcosuchus">
                Nothing to see here, this tab is <em>extinct</em>!
            </Tab>
        </Tabs>
    </div>
    </div>
  );
}

export default App;
