import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import Me from "../assets/Images/profile-img.png";
import Typewriter from "typewriter-effect";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  width: 50vw;
  height: 55vh;
  color: white;
  /* background-color: green; */
  /* display: flex; */

  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.plesk};
  border-right: 2px solid ${(props) => props.theme.plesk};
  border-top: 25px solid ${(props) => props.theme.plesk};
  border-bottom: 2px solid ${(props) => props.theme.plesk};

  z-index: 11;
`;
const SubBox = styled.div`
  width: 90%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: -50;
    left: 130%;
    z-index: 12;
    width: auto;
    height: 400px;
  }
`;

const Text = styled.div`
  color: white;
  font-size: 16px;
  /* cursor: pointer;
  display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-evenly; */
  margin: 10px 0 0 10px;
  font-family: "VT323", monospace;
  /* --typewriterSpeed: 000001s */
`;

function App() {
  return (
    <div className="App">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2500)
            .typeString(
              '<span style="color: #31D51E;"> <strong> ^Ryan_1999@OReilly </strong><span style="color: white;"> : </span> <span style="color: #BD0756;"> ~ </span> <span style="color: #29DBB7;"> $ </span>  <span style="color: white;">  cd Ryan_1999/About</span> <br/> <br/> <span style="color: white;"> My favorite code quote, "Build fast, Code big". <br/> <br/> Hey There! I am Ryan OReilly. <br> I love to code, solve interesting mathematics problems, and play football, and maybe sketching too. <br/> <br/> I have worked in fields like Android Development, Linux Development, Simple robotics with Raspberry Pi, Machine Learning, Web Development and Game Development until now, and Im working on other new things. You can learn more about me on my portfolio You can visit my other profiles, here: <br/> <br/>  <a style="color: orange;" href="https://www.linkedin.com/login" target="_blank">LinkedIn</a> > <br/><a style="color: orange;" href="https://www.linkedin.com/login" target="_blank">Github</a> > <br/> <a style="color: orange;" href="https://www.linkedin.com/login" target="_blank">HackerRank</a> > <br/> <br/> If you would like to get in touch with me, feel free to send me an email at <br/> rsvoreilly@gmail.com. <br/><br/><span style="color: #31D51E;"> <strong> ^Ryan_1999@OReilly </strong><span style="color: white;"> : </span> <span style="color: #BD0756;"> ~ </span> <span style="color: #29DBB7;"> $ </span>  <span style="color: white;">  Exit </span><span/> </span>  </span>'
            )
            .start();
        }}
      />
      <span></span>
    </div>
  );
}

const Intro = () => {
  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <App />
        </Text>
      </SubBox>
      {/* <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox> */}
    </Box>
  );
};

export default Intro;
