import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Compo } from './Componets/compo'

function App() {
    const[to,setTo]=useState(false);
  
    return (
      <div>
        <button  onClick={()=>{
          setTo(!to)
        }}>Toggle</button>
        {to && <Compo/>}
      </div>  
    );
}

export default App
