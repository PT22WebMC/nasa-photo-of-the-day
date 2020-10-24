import React from 'react'
import styled from 'styled-components'
function NasaImg(props){
    
    console.log(props)
    
    const ImgSrc = styled.img`
    
    width:50%;
    border: 3px solid white;
    margin-bottom: 2.5rem;
    `

    return(
    <div>
        <ImgSrc alt = 'Image of space' src = {props.img}/>
    </div>



    )}

export default NasaImg