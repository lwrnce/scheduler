import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from './Button'
import Event from './Event'


const TimeTable = () => {
    const [text, setState] = useState({
        nineAM: "",
        tenAM: "",
        elevenAM: "",
        twelvePM: "",
        onePM: "",
        twoPM: "",
        threePM: "",
        fourPM: "",
        fivePM: "",
    })
    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...text,
            [e.target.name]: value
        });
    }

    const onClick = () => {
        console.log({text})
    }
    
    return (
        <Container className="time-block">
            <Row>
                <Col>
                <p>Time</p>
                </Col>
                <Col md={8} sm={4}>
                <p>Event</p>
                </Col>
                <Col>
                <p>Save your event</p>
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>9:00 AM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="nineAM" placeholder='Add event...' value={text.nineAM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>10:00 AM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="tenAM" placeholder='Add event...' value={text.tenAM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>11:00 AM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="elevenAM" placeholder='Add event...' value={text.elevenAM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>12:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="twelvePM" placeholder='Add event...' value={text.twelvePM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>1:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="onePM" placeholder='Add event...' value={text.onePM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>2:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="twoPM" placeholder='Add event...' value={text.twoPM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>3:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="threePM" placeholder='Add event...' value={text.threePM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>4:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="fourPM" placeholder='Add event...' value={text.fourPM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
            <Row>
                <Col className="hour">
                    <p>5:00 PM</p>
                </Col>
                <Col md={8} sm={4}>
                    <form className='add-form'>
                        <textarea name="fivePM" placeholder='Add event...' value={text.fivePM} onChange={handleChange}></textarea>
                    </form>
                </Col>
                <Col>
                    <Button color='steelblue' text='Save' height='100px' onClick={onClick} />
                </Col>
            </Row>
        </Container>
    )
}

export default TimeTable;
