import React from "react";
import "./App.css";
// import it is bootstrap start
import { Container, Row, Col } from "reactstrap";
// import it is bootstrap end

// import the react routes start

// import the react routes end

// import the routes components start
import Routers from "./Routes/Router";
// import the routes components end

// import sidebar icons start
import Dashboard from "./Assets/icons/Dashboard.svg";
import addUser from "./Assets/icons/addUser.svg";
import addFood from "./Assets/icons/addFood.svg";
import viewOrder from "./Assets/icons/viewOrder.svg";
import viewMessage from "./Assets/icons/viewMessage.svg";
// import sidebar icons end

// import web site brand start
import Logo from "./Components/Brand/Logo";
// import web site brand end

// import components start
import ProspsDashboard from './Components/DashboardElements/PropsDashboard'
import Link from './Components/DashboardElements/LinkDashboard'
// import components end

const App = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md='3' className="sidebar p-3 flex column">
            <a href="/" className="d-flex align-items-center justify-content-center">
              <Logo />
            </a>
            <hr />
            <Link href='/dashboard' className='sidebarLink'>
              <ProspsDashboard icon={Dashboard} text={'Dashboard'} />
            </Link>
            <Link href='/' className='sidebarLink'>
              <ProspsDashboard icon={addUser} text={"Yangi adminlar qo'shish"} />
            </Link>
            <Link href='/addFood' className='sidebarLink'>
              <ProspsDashboard icon={addFood} text={"Yangi ovqatlar qo'shish"} />
            </Link>
            <Link href='/orders' className='sidebarLink'>
              <ProspsDashboard icon={viewOrder} text={"Buyurtmalarni ko'rish"} />
            </Link>
            <Link href='/' className='sidebarLink'>
              <ProspsDashboard icon={viewMessage} text={"Habarlarni ko'rish"} />
            </Link>
          </Col>
          <Col md='9'>
            <Container fluid className="p-3">
              <Row className="navbar">
                <Col md='6' className="nav--text">
                  <span>admin bo'limi</span>
                </Col>
                <Col md='6'>
                  <Row className="d-flex align-items-center">
                    <Col md='6' className="search--input d-flex align-items-center">
                      <label htmlFor="search">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="33"
                          viewBox="0 0 33 33"
                          fill="none"
                        >
                          <g opacity="0.2">
                            <path
                              d="M15.125 8.25C18.9219 8.25 22 11.328 22 15.125M22.9059 22.9005L28.875 28.875M26.125 15.125C26.125 21.2002 21.2002 26.125 15.125 26.125C9.04986 26.125 4.125 21.2002 4.125 15.125C4.125 9.04986 9.04986 4.125 15.125 4.125C21.2002 4.125 26.125 9.04986 26.125 15.125Z"
                              stroke="black"
                              stroke-width="2.67"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </svg>
                      </label>
                      <input type="text" id="search" placeholder="Qidirish" />
                    </Col>
                    <Col md="5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                      >
                        <path
                          d="M22.5 18.75C18.3579 18.75 15 15.3921 15 11.25C15 7.10787 18.3579 3.75 22.5 3.75C26.6421 3.75 30 7.10786 30 11.25C30 15.3921 26.6421 18.75 22.5 18.75Z"
                          stroke="#D9D9D9"
                          stroke-width="3"
                        />
                        <path
                          d="M16.875 38.6533C18.5799 39.1161 20.487 39.375 22.5 39.375C29.7487 39.375 35.625 36.0171 35.625 31.875C35.625 27.7329 29.7487 24.375 22.5 24.375C15.2513 24.375 9.375 27.7329 9.375 31.875C9.375 32.5224 9.51863 33.1508 9.78844 33.75"
                          stroke="#D9D9D9"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Routers />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default App;
