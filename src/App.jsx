import { useState } from "react"

export default function App(){
  return <div>
<LightBulb> </LightBulb>    
  </div>
}

function LightBulb(){
  const [bulbOn,setBulbValue] = useState(true)

return <div>
 <BulbState bulbOn={bulbOn}> </BulbState>   
 < ToggleBulb setBulbValue={setBulbValue}> </ToggleBulb>
  </div>
}

function BulbState({bulbOn}){

return <div>
{bulbOn? "bulb on": "bulb off"}
  </div>
}

function ToggleBulb({setBulbValue, bulbOn}){
  
  function handler(){
    setBulbValue(!bulbOn);
  }

  return <div>
    <button onClick={handler}> Toggle the Bulb</button>
    
  
    
  </div>
}
