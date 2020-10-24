import React from 'react'

function NasaImg(props){
    
    console.log(props)
    

    return(
    <div>
        <img alt = 'Image of space' src = {props.img}/>
    </div>



    )}

export default NasaImg