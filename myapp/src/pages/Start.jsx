import '../styles/start.css'
import NavScrollExample from './main-components/Navbar.jsx';
import { useState } from 'react';

const Start = () => {

    const [arena,setArena] = useState("");

    const fetching = () => {
        const url = process.env.REACT_APP_API || "http://localhost:4000/";

        fetch(url)
          .then(response => response.json())
        .then(data => {
            console.log(data);
            setArena(data.arena.name)
      })
  
      }
    

    return(
        <>
        <NavScrollExample />
        <h1 className='start-head'>Football</h1>
        <button onClick={fetching}>src</button>
        <h3>{arena}</h3>
        </>
    )
}

export default Start;