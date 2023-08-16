import React from "react";
import { Col, Container, Row } from "reactstrap";
import './addFood.css'
import errorFood from '../../Assets/imgs/errorFood.png'
const AddFood = () => {
    return (
        <>
            <Container className="Add-Food h-75">
                <div className="foodImages">
                    <img src={errorFood} alt="errorFood" />
                </div>
                <div className="forms my-5">
                    <Row className="flex-column">
                        <Col md='12' className="inputs">
                            <input type="text" placeholder="Taom nomi" />
                            <input type="text" placeholder="Taom narxi" />
                        </Col>
                        <Col md='12' className="inputs">
                            <input type="text" placeholder="Ovqat haqida" />
                            <input type="text" placeholder="Restoran nomi" />
                        </Col>
                    </Row>
                </div>
                <div className="button-AddFood">
                    <button>joylash</button>
                </div>
            </Container>
        </>
    )
}


export default AddFood