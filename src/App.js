import './App.css';
import {useState} from 'react';


function App() {
    const [emptyResult, setEmptyResult] = useState(false); // this is the state
    const [brewery, setBrewery] = useState([]); // array of breweries
    const [input, setInput] = useState(''); // input from user
    const [loading, setLoading] = useState(false); // loading state

    const getBreweries = () => {
      fetch(`https://api.openbrewerydb.org/breweries?by_state=${input}`)
      .then(res => res.json())
      .then(data => {
        setLoading(true);
        setTimeout(function(){ // this is a timeout function if the array is empty
          if(data.length < 1) {
            setEmptyResult(true); // if the array is empty, set the state to true (no results)
          }
        setBrewery(data); // set the state to the array of breweries
        setLoading(false); // set the loading state to false
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
};



}
export default App;