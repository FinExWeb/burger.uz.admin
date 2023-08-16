import React from "react";
import { Col, Container, Row } from "reactstrap";
import Food from './img/Food.png'
import icon from './img/Icon.svg'
import './card.css'

const Cards = () => {
    return (
        <>
            <div className="p-4 orderViewCard">
                <div className="card">
                    <Row className="food-image-content">
                        <Col className="bruh" md='5'>
                            <img src={Food} alt="Food" />
                        </Col>
                        <Col className="bruh" md='6'>
                            <h2>Qozon Kabob</h2>
                            <div className="content">
                                <h3>Buyurtmachi Manzili : Uchtepa </h3>
                                <h3>Yetkazish Narxi : 20 000 so’m</h3>
                                <h3>Tayyorlash va Yetkazish<br />Muddati : 30 daqiqa</h3>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="food-order-views">
                        <Col md='12' className="viewAnotherOrder align-items-center d-flex justify-content-between">
                            <button>Qoshimcha Buyurtmalar</button>
                            <img src={icon} alt="icon" />
                        </Col>
                        <Col md='12' className="buttonOrder align-items-center d-flex">
                            <button>1 porsiya</button>
                            <button>3 ta Salad</button>
                            <button>2 ta Pepsi</button>
                        </Col>
                        <Col md='12' className="orderSince align-items-center d-flex">
                            <button>Narxi : 150 000 so’m</button>
                        </Col>
                    </Row>
                </div>
            </div >
        </>
    )
}

export default Cards;