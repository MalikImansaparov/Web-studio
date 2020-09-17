import React, {Component} from 'react';
import {Container, Row, Col, Media, ListGroup, Card} from "react-bootstrap";


class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md='9'>
                        <Media className='m-5'>
                            <img
                            height={150}
                            width={150}
                            className='mr-3'
                            src='https://www.sololearn.com/Icons/Courses/1024.png'
                            alt='js'/>
                          <Media.Body>
                             <h3>Javascript</h3>
                              <p>This tutorial covers all basic features of JavaScript programming, including ways to make your website more interactive, create change website content, validate forms, create cookies, and so much more.

                                  Go through our carefully selected instructional lessons, then take interactive quizzes while exploring checkpoints.

                                  Our collection of exercises and hands-on practice sessions guide you as you work through the process of creating your own JavaScript code.</p>
                          </Media.Body>
                        </Media>
                        <Media className='m-5'>
                            <img
                                height={150}
                                width={150}
                                className='mr-3'
                                src='https://www.sololearn.com/Icons/Courses/1073.png'
                            alt='python'/>
                            <Media.Body>
                                <h3>Python</h3>
                                <p>Learn Python, one of today's most in-demand programming languages on-the-go, while playing, for FREE! Compete and collaborate with your fellow SoloLearners, while surfing through short lessons and fun quizzes. Practice writing Python code within the app, collect points, and show off your skills. </p>
                            </Media.Body>
                        </Media>
                        <Media className='m-5'>
                            <img
                                height={150}
                                width={150}
                                className='mr-3'
                                src='https://www.sololearn.com/Icons/Courses/1092.png'
                            alt='angular'/>
                            <Media.Body>
                                <h3>Angular + NestJS</h3>
                                <p>Popular frameworks like Angular are being used for additional structure and clear data types. Angular requires less code, is portable through browsers, provides easy to understand code, and boosts confidence in TypeScript code quality with short compile times. Using Angular and Nest is a growing trend in MEAN stack development to build applications.</p>
                            </Media.Body>
                        </Media>
                        <Media className='m-5'>
                            <img
                                height={150}
                                width={150}
                                className='mr-3'
                                src='https://www.sololearn.com/Icons/Courses/1097.png'
                            alt='react'/>
                            <Media.Body>
                                <h3>React + Redux</h3>
                                <p>React is a component-based JavaScript library used to create single page or large web applications with dynamic content. In this course, you will learn React core concepts in a fun and effective way. The course covers React DOMs, JSX, components, props, state, hooks, life cycle methods, handling events, rendering lists, actions, reducers and much more.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md='3'>
                        <h3 className='text-center mt-2'>Categories</h3>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item><h4>HTML/CSS</h4></ListGroup.Item>
                                <ListGroup.Item><h4>Javascript</h4></ListGroup.Item>
                                <ListGroup.Item><h4>Node.js</h4></ListGroup.Item>
                                <ListGroup.Item><h4>Python</h4></ListGroup.Item>
                                <ListGroup.Item><h4>Frameworks JS</h4></ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title><h4>Side widget</h4></Card.Title>
                                <Card.Text>Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.</Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Blog;