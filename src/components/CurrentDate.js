import { format, utcToZonedTime } from 'date-fns';
import { Container, Row, Col } from 'react-bootstrap';

const CurrentDate = () => {
    const laTime = 'America/'
    const showDay = format(new Date(), 'cccc');
    const showDate = format(new Date(), "LLLL d, yyyy");
    let dayDisplay = JSON.stringify(showDay);
    let dateDisplay = JSON.stringify(showDate);

    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    <p>{dayDisplay}</p>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <p>{dateDisplay}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default CurrentDate;
