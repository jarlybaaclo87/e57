import {useState} from 'react'

const Reacthooks = () => {
    //scripts       
    const [counter,setCounter] = useState(0);
    //event handlers
    const countUp = ()=>{
        setCounter((initCount)=>initCount+1);
    };
  return (
    <div className='my-2'>
        <h1>Reacthooks count value:{counter}</h1>
        <button className="btn btn-primary" onClick={countUp}>CountUp</button>
        <button className="btn btn-primary ms-2" onClick={()=>{setCounter((initCount)=>initCount-1);}}>Countdown</button>
        <button className="btn btn-primary ms-2"onClick={()=>{setCounter(0);}}>Reset Counter</button>
        </div>
  )
}

export default Reacthooks