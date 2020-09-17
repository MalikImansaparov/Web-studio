import React, {Component} from 'react';
import { Nav, Row, Col, Tab, Container } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container style={{height:'500px'}}>
            <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                <Row>
                    <Col sm={3}>
                      <Nav variant='pills' className='flex-column mt-2'>
                          <Nav.Item>
                              <Nav.Link eventKey='first'>Desing</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='second'>Team</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='third'>Programing</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                          </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content mt='3'>
                            <Tab.Pane  eventKey='first'>
                               <img src='https://cdn.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9-1520x800.png'
                               alt='dev' height='200px' width='150px'/>
                               <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis est eum explicabo fuga,
                                   hic molestiae nihil placeat quo vitae? Ipsum officiis quas quia repudiandae?</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <img src='https://media.istockphoto.com/photos/startup-developer-team-did-it-again-picture-id497614524?k=6&m=497614524&s=170667a&w=0&h=Wu9KEIHG8HvdSR0QngfwKikkqOlvdZX_VlYuzGNjl8M='
                                alt='tm'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis est eum explicabo fuga,
                                    hic molestiae nihil placeat quo vitae? Ipsum officiis quas quia repudiandae?</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <img src='https://tavvy.com/article/wp-content/uploads/2019/12/programming.jpg'
                                alt='rd'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis est eum explicabo fuga,
                                    hic molestiae nihil placeat quo vitae? Ipsum officiis quas quia repudiandae?</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fourth'>
                                <img src='https://www.improgrammer.net/wp-content/uploads/2018/10/Most-Popular-javascrit-Frameworks-1.jpg'
                                alt='frw'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis est eum explicabo fuga,
                                    hic molestiae nihil placeat quo vitae? Ipsum officiis quas quia repudiandae?</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fifth'>
                                <img src='data:image/png;base64,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'
                                alt='lib'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis est eum explicabo fuga,
                                    hic molestiae nihil placeat quo vitae? Ipsum officiis quas quia repudiandae?</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </Container>
        );
    }
}

export default About;