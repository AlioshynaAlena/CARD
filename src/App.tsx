// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import styled from 'styled-components'
import Image from './assets/image.svg'
import { StyleContainer } from './components/StyleContainer'
import { StyledBtn } from './components/StyledBtn'
import { StyleImage } from './components/StyleImage'
import { StyleAbout } from './components/StyleAbout'
import { StyleTitle } from './components/StyleTitle'
import { StylePar } from './components/StylePar'
import { StyledBtnTwo } from './components/StyledBtnTwo'



function App() {
 return (
 
    <StyleContainer>
<StyleImage  src={Image} alt='image'/>
<StyleAbout>
  <StyleTitle>Headline</StyleTitle>
  <StylePar>Faucibus. Faucibus. Sit sit sapien sit <br></br>tempusrisu ut. Sit molestie ornare in venen.</StylePar>
  <StyledBtnTwo>See more</StyledBtnTwo>
<StyledBtn>Save</StyledBtn>
</StyleAbout>
    </StyleContainer>


 )
}






export default App
