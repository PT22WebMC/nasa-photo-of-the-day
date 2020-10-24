import React from 'react'
import styled from 'styled-components'

function NasaCard(props){
  
   

    const Title = styled.h1`
        color: white;
        font-size: 4rem;
        margin-top: 6%;


    `

    const Date = styled.h4`
    margin:4%;
    `
    const Explanation = styled.p`
    background-color: black;
    opacity: .8;
    margin: 10%;
    border: 1px solid white;
    padding: 20px;
    border-radius: 25px;
    `
  

    console.log(props)

    return (

        <div>
            <Title>{props.data.title}</Title>
            <Date>{props.data.date}</Date>
            <Explanation>{props.data.explanation}</Explanation>
        </div>
    )

}

export default NasaCard