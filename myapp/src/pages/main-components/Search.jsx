import { useState } from "react";

const Search = () => {

    const [arena,setArena] = useState("");
    const [img,setImg] = useState("");


    const fetching = () => {
        const url = process.env.REACT_APP_API || "http://localhost:4000/";

        fetch(url)
          .then(response => response.json())
        .then(data => {
            console.log(data);
            setArena(data[0].arena.name);
            setImg(data[0].city.img[0]);
      })
  
    }

    return(
        <>
        
        </>
    )
    
}