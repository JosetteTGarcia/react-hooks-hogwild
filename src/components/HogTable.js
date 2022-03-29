import React, {useState} from "react";
import Tile from "./Hog";
import FilterBar from "./FilterBar";

function HogTable({hogData}){

  const [hideDetails, setHideDetails] = useState(true)
  const [isGreasy, setIsGreasy] = useState(true);
  const [sortBy, setSortBy] = useState("name");

  function handleTileClick(event){
    setHideDetails(!hideDetails)
  }

  const hogsToDisplay = hogData
  
  .filter((hog) => (isGreasy ? hog.greased : !hog.greased))
  .sort((hog1, hog2) => {
    if (sortBy === "weight") {
      return hog1.weight - hog2.weight;
    } else {
      return hog1.name.localeCompare(hog2.name);
    }
  });


  return(
    <div>


      <div>
        <FilterBar
          isGreasy={isGreasy} 
          onGreaseChange={setIsGreasy}
          sortBy={sortBy}
          onSortChange={setSortBy}
           />
           </div>


       <br /><br />


      <ul class="ui grid container"> 
        {hogsToDisplay.map((hog) => (
            <Tile
              key={hog.name}
              hogData={hog}
              hideDetails={hideDetails}
              handleTileClick={handleTileClick}
            />))}
      </ul>
    </div>
    
  
  )
}

export default HogTable;