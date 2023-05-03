import styled, { ThemeProvider } from "styled-components"
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { darkTheme,LightTheme } from "./utils/Theme";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   
 } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Login from "./Pages/Login";
const Container = styled.div`
display:flex;


`
const Main = styled.div`
flex:7;
background-color:${({theme})=>theme.soft};
`
const Wrapper = styled.div`
padding:15px 56px;
`

function App() {
  const [darkMode , setDarkMode] = useState(true)
  return (
     <ThemeProvider theme={darkMode ? darkTheme : LightTheme}>

    <Container>
      <Router>

    <Sidebar darkMode={darkMode}  setDarkMode ={setDarkMode}/>
    <Main>
       <Navbar/>
       
       <Wrapper>




       <Routes>
         <Route path="/" >
            
             <Route index  element={<Home type="random"/>} />
             
             <Route path="subscriptions"  element={<Home type="sub"/>} />
             <Route path="trends"  element={<Home type="trend"/>} />
             <Route path="signin" element = {<Login/>} />
             <Route path="video">
             <Route path=":id" element ={<Video/>}/>
             </Route> 
         </Route>
        </Routes>
       
        
        
     
       

       </Wrapper>
    </Main>
      </Router>
   </Container>
     </ThemeProvider>
  );
}

export default App;
