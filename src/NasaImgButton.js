import React, {useState} from 'react'
import NasaImg from './NasaImg'
import styled from 'styled-components'

function NasaImgButton(props){

    const [toggle, setToggle] = useState(false);

    const clickButton = e => {
        // e.preventDefault();
        setToggle(!toggle)
    }

    const ImgButton = styled.button`

    margin-bottom: 8%;

    `
    return (
        <div>
            <ImgButton onClick={clickButton}>Show Img / Hide Img</ImgButton>
            {toggle === true ? <NasaImg img = {props.img}/> : null}
        </div>

    )
}

export default NasaImgButton