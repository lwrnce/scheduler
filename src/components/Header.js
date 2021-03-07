import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';

const Header = ({title}) => {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row>
                    <Col md={8} sm={12} className="px-0">
                        <h1 className="display-3">{title}</h1>
                        <p className="lead">A simple calendar app for scheduling your work day</p>
                        <p idName="currentDay" className="lead"></p>
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
    title: PropTypes.string.isRequired,
}

export default Header;
