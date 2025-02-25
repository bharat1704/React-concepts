import { useState } from "react"

//custom hook
function useCounter(){
  const[count, SetCount] = useState(0);

  function increasecount(){
    SetCount(count+1);
  }
  return{
    count:count,
    increasecount:increasecount
  }
}

export default function App(){
  const [count,increasecount] = useCounter;
  
return <div>

  <button onClick={increasecount}> Counter </button>
{count}
</div>


}
