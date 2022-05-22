import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Background from './assets/parallax-bg.gif';
import About from './components/About';

const Container = styled.div`
  height:100vh;
  overflow:hidden;
  background-image: url(${Background});
  background-size:cover;
`;


const App = () => {
  return (
  <>
  <Container>
  <Navbar/>
  <Intro/>
  </Container>
  <Container>
    <About/>
  </Container>
  </>
  );
};

export default App;
