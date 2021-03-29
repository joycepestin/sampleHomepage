import React from 'react'
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const Homepage = () => {
    return (
        <div>
            <Container className="hm-container">
                <Row className="row1">
                    <Col className= "row1-col1">
                        <img src="./images/escolario.logo" alt="pic1"></img>
                        <p>HEADLINE</p>
                    </Col>
                    <Col xs={6} className="row1-col2">HEADLINE</Col>
                    <Col className="row1-col3">HEADLINE</Col>
                </Row>
                <Row className="row2">
                    <Col className="row2-col1">
                      <p className="row2-p1">HEADLINE 2</p>
                    </Col>
                    <Col xs={5} className="row2-col2">2 of 3 (wider)</Col>
                    <Col className="row2-col3">3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}
