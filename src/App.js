import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import QuotesStack from './components/QuotesStack';


function App() {
  const [items, setItems] = useState([])

  const fetchData = () =>{
    return fetch("https://jsonguide.technologychannel.org/quotes.json")
    .then((res)=>res.json())
    .then((data)=>{
      setItems(data)
    })
  }

  return (
    <div className="App">
      <Navbar/>
      <button className='fetchbtn' onClick={()=>fetchData()}>See All the Quotes</button>
      {
        items.map((item)=><QuotesStack text={item.text} from={item.from}/>)
      }

      

    </div>
  );
}

export default App;
