import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Components/LeftSideNav';
import NavBar from '../Components/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <Row>
                    <Col lg='3'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Main;