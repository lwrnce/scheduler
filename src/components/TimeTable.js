import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from './Button'

const TimeTable = () => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <Container className="time-block">
            <Row>
                <Col>
                <p>Time</p>
                </Col>
                <Col md={8} sm={4}>
                <p>Event</p>
                <form>
                    <textarea>Add event...</textarea>
                </form>
                </Col>
                <Col>
                <p>Save your event</p>
                 <Button color='green' text='Save' onClick={onClick} />
                </Col>

                <Col>
                </Col>
                <Col md={8} sm={4}>
                <form>
                    <textarea>Add event...</textarea>
                </form>
                </Col>
                <Col>
                 <Button color='green' text='Save' onClick={onClick} />
                </Col>

                <Col>
                </Col>
                <Col md={8} sm={4}>
                <form>
                    <textarea>Add event...</textarea>
                </form>
                </Col>
                <Col>
                 <Button color='green' text='Save' onClick={onClick} />
                </Col>
            </Row>
        </Container>
    )
}

export default TimeTable;
