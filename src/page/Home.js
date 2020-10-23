import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/jessica-arends-8saVYOMHFzU-unsplash.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import { Title, Subtitle } from '../components/Typography'

const Button = styled.button`
padding: 1rem .5rem;
background-color:transparent;
border: #fff solid 1px;
border-radius:8px;
margin:1rem;
color: #fff ;
cursor:pointer;
transition:background-color .3s;

text-transform: uppercase;


&:hover{
  background-color: #fff;
  color: #cf7b7e;
}
`
 
const Content = styled.div`
padding: 8rem;
`

function Home() {
  return (
    <>
      <BackgroundBlock src={backgroundImage}>
      <Title> Cafe For You </Title>
          <Subtitle> We hope you will find a good coffee shop in our website </Subtitle>
          <Button as='a' href='#content'>Look around </Button>
        </BackgroundBlock>
        <Content id='content'>
        
        
        </Content>
      </>
  )
}
export default Home