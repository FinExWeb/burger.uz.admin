import { Container, Row, Col, } from 'reactstrap'
import Brand from '../../Assets/imgs/Brand.svg';
import './propsDashboard.css'

const PropsDashboard = ({ icon, text }) => {
    return (
        <Container fluid className='my-1 shadowEffec'>
            <Row className='d-flex align-items-center'>
                <Col md='2'>
                    <img src={icon || Brand} alt="Brand || icon" />
                </Col>
                <Col md='10' className='d-flex align-items-center dashboard--text'>
                    {text}
                </Col>
            </Row>
        </Container>
    )
};

export default PropsDashboard;