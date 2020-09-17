import React, {Component} from 'react';
import CaruselBox from "../Components/CaruselBox";
import {Card, Button, Container, CardDeck} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <>
                <CaruselBox/>,
                <Container>
                    <h2 className='text-center'>Our team</h2>
                    <CardDeck className='m-4'>
                        <Card  text='info'>
                           <Card.Img
                           variant='top'
                           src='https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
                        <Card.Body>
                            <Card.Title><h4>Developers</h4></Card.Title>
                            <Card.Text>We build an ideal websites for every business. A constructive approach and responsibility in each project.</Card.Text>
                            <Button variant='primary'>About team</Button>
                        </Card.Body>
                        </Card>
                        <Card text='info'>
                            <Card.Img
                                variant='top'
                                src='https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
                            <Card.Body>
                                <Card.Title><h4>UI/UX Designers</h4></Card.Title>
                                <Card.Text>Our high-quality professionals takes care about your website so you can focus on running your business.</Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>
                        <Card text='info'>
                            <Card.Img
                                variant='top'
                                src='https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
                            <Card.Body>
                                <Card.Title><h4>QA Engineers</h4></Card.Title>
                                <Card.Text>Digital marketing will help you get new clients and grow business. Contact us and we'll gonna make you an offer you can't refuse.</Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}

export default Home;