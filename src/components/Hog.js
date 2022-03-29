import React from "react";


function Tile({hogData, hideDetails, handleTileClick}){


// function justOneHog(event){
//   if (event.target.className === name){
//     handleTileClick()
//   }
// }
const extraDetails =  
<p>
Specialty: {hogData.specialty} <br/>
Greased: {hogData.greased ? "Greasy Boi" : "Squeky Clean"}<br/>
Weight: {hogData.weight} <br/>
Highest medal Acheived: {hogData["highest medal achieved"]}
</p>


  return (
   <div class= "ui card" onClick={handleTileClick}>
    <div class="image">
      <img src={hogData.image}/>
    </div>
    <div class="content">
      <a class="header">{hogData.name}</a>
    </div><br/>
    <div class={hideDetails ? "hidden" : "showing"}>
    {hideDetails ? null : extraDetails}
    </div>
  </div>
  )
}

export default Tile;