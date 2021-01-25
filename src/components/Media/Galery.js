import React, { useState } from 'react';

const Galery = () =>{
    const [pictures, setPictures] = useState([])
    return(
        <div>
        {pictures.map(picture=>(
            {picture}
        ))}
        </div>
    );
}
export default Galery;