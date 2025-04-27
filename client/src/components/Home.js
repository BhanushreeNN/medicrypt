import Cards from "./Cards.jsx";
import { Link as ScrollLink } from "react-scroll";
import CarouselComponent from "./Carousel.jsx";
import Content from "./Content.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../assets/card1.jpg"; 
import img2 from "../assets/c2.png"; 
import img3 from "../assets/c3.png"; 
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import VantaBackground from "./VantaBackground.js";
const Home = () => {
  return (
    <div>
      <VantaBackground />
      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "black",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <>
          <Container className="text-center my-5">
            <Row>
              <Col md={4}>
                <Cards
                  title="Maintaining Medical Records"
                  imgSrc={img1}
                  text="Keep track of your medical records, enabled by blockchain technology."
                />
              </Col>
              <Col md={4}>
                <Cards
                  title="Connect With Doctors"
                  imgSrc={img2}
                  text="Share your records with our trusted medical experts, to get a prescription."
                />
              </Col>
              <Col md={4}>
                <Cards
                  title="Secure Insurance Claims"
                  imgSrc={img3}
                  text="Easily submit and track insurance claims through our secure blockchain platform."
                />
              </Col>
            </Row>
          </Container>
        </>
      </div>
    </div>
  );
};

//   return (
//     <div style={{backgroundColor: "white", paddingBottom: "1%"}}>
//       <CarouselComponent />
//       <Content />
//       <Container className="text-center my-5">
//         <Row>
//           <Col md={4}>
//             <Cards
//               title="Maintaining Medical Records"
//               imgSrc={img1}
//               text="Keep track of your medical records, enabled by blockchain technology."
//             />
//           </Col>
//           <Col md={4}>
//             <Cards
//               title="Connect With Doctors"
//               imgSrc={img2}
//               text="Share your records with our trusted medical experts, to get a prescription."
//             />
//           </Col>
//           <Col md={4}>
//             <Cards
//               title="Secure Insurance Claims"
//               imgSrc={img3}
//               text="Easily submit and track insurance claims through our secure blockchain platform."
//             />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

export default Home;
