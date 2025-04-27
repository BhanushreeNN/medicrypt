import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";
import f1 from "../assets/footer/f1.jpg";
import f2 from "../assets/footer/f2.jpg";
import f3 from "../assets/footer/f3.jpg";
import f4 from "../assets/footer/f4.png";
import f5 from "../assets/footer/f5.jpg";
import f6 from "../assets/footer/f6.jpeg";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#09335E" }}
    >
      <MDBContainer className="p-4">
        <section className="">
          <MDBRow>
            <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img src={f1} className="w-100 rounded" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img src={f2} className="w-100 rounded" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img src={f3} className="w-100 rounded" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img src={f4} className="w-100 rounded" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img src={f5} className="w-100 rounded" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="4" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img src={f6} className="w-100 rounded" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

    </MDBFooter>
  );
}
