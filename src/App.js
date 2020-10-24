import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import NasaCard from './NasaCard'
import NasaImgButton from './NasaImgButton'
import styled from 'styled-components'

function App() {

const [data, setData] = useState([])


  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=zz6OgCc1GkIEDz9Wbgr4QAOEHPGRJNJzBhHbVVm2')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
        
      })

    .catch((err) => {
      console.log(err)
    })

  },[])

  const Background = styled.div`
  
  background-image: url('images.jpeg');
  // background-repeat: no-repeat;
  // background-size: cover;
  color: white;
  height: 100%;
  width: 100%;
  font-size:1.5rem;
  margin-top: -3rem;
  
  

`

  return (
    <Background>
      <div className="App">
      <NasaCard data = {data}/>
      <NasaImgButton img = {data.hdurl}/>
      </div>
    </Background>

  );
}

export default App;
