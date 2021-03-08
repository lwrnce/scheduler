// import React, { Component } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Button from './Button'

// export default class Event extends Component {
//      state = {
//         tenAM: { text:'', save: false },
//     };

//     handleChange = (event) => {
//         const input = event.target;
//         const value = input.value
//         this.setState({ [input.name]: {value, save} });
//     }

//     onClick = () => {
//         console.log({})
//     }

//     handleFormSubmit = () => {};

//     render () {
//         return(
//         <Container>
//             <Row>
//                 <Col md={8} sm={4}>
//                     <form onSubmit={this.handleFormSubmit}>
//                         <textarea name="tenAM" placeholder='Add event...' value={this.state.tenAM} onChange={this.handleChange}></textarea>
//                     </form>
//                 </Col>
//                 <Col md={2} sm={4}>
//                     <Button type="submit" color='steelblue' text='Save' height='100px' onClick={this.onClick} />
//                 </Col>
//             </Row>
//         </Container>
//         );
//     };
// }
