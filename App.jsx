import Card from "./assets/Card"
import IdolCard from "./assets/IdolCards";
import Idols from "./assets/Idols"
import AnriProfilePic from './assets/anri.jpg';
import UserGreeting from "./assets/UserGreeting";
import List from "./assets/List";
import Button from "./assets/button";
import Mycomponent from "./assets/MyComponent";
import Counter from "./assets/Counter";

function App() {

  return(
  <> 
  <UserGreeting isLoggedIn={true} username='Fallen'/>
  <Card/>
  <IdolCard name="Anri" japaneseName="杏里" profilePic={AnriProfilePic}/>
  <Idols name="Anri" Tophit="Kanashimi ga Tomaranai" debut={1978} isActive={true}/>
  <Idols name="Mariya Takeuchi" Tophit="Plastic Love" debut={1978} isActive={true}/>
  <Idols name="Yumi Arai" Tophit="Rouge No Dengon" debut={1968} isActive={true}/>
  <Idols/>
  <List/>
  <Button/>  
  <Mycomponent/> 
  <Counter/>
  </>
    
  );

}

export default App
