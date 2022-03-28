import { Component, useState } from 'react';
import Clothes from './Clothes';
import { data } from './data';
import './App.css';
import Buttons from './Buttons';



function App() {

  const [clothes, setClothes] = useState(data);

  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
  }

  return(
    <div>
      <div className='cont'>
        <h2 className='back'>Free Standard Shipping</h2>
      </div>
      <Buttons filteredClothes={chosenClothes}/>
      <Clothes itemForSale={clothes}/>
    </div>
  )


}

export default App;
