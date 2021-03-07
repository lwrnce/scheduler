import propTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';
import CurrentDate from './CurrentDate';

const Header = ({title}) => {
    
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row>
                    <Col>
                        <h1 className="display-3">{title}</h1>
                        <p className="lead">A simple calendar app for scheduling your work day</p>
                        <p idname="currentDay" className="lead">{CurrentDate}</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

Header.defaultProps = {
    title: 'Work Day Scheduler',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header;