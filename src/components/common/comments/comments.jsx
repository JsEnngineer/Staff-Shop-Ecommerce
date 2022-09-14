import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './index.css';
import otzuv1 from '../../../assets/img/otzuv1.jpg';
import otzuv2 from '../../../assets/img/otzuv2.jpg';

function Comments() {
    return (
        <>
            <Row className="flex-center " id="comments">
                <Col lg={6} md={10} className="d-flex mx-auto mt-5">
                    <Image src={otzuv1} className="otzuv1"  width={40} height={40} roundedCircle className="bg-dark" />
                    <Col xs={10} className="m-auto">
                        <div className="comments__info d-flex">
                            <p>Марина</p>
                        </div>
                        <div className="comments__text p-3 w-100">Довольна покупкой посылка пришла в течение 2 дней, спасибо Staff</div>
                    </Col>
                </Col>
                <Col lg={6} md={10} className="d-flex mx-auto mt-5">
                    <Image src={otzuv2} className="otzuv2" width={40} height={40} roundedCircle className="bg-dark" />
                    <Col xs={10} className="m-auto">
                        <div className="comments__info d-flex">
                            <p>Виктория</p>
                        </div>
                        <div className="comments__text p-3 w-100">Отличный товар рекомендую покупать. Качественный материалы</div>
                    </Col>
                </Col>
            </Row>
            <Col lg={12} xs={8} className="d-flex justify-content-center mx-auto mt-5 mb-5 p-0">
                <button className="comments__btn px-4 px-lg-5 py-2">ВСЕ ОТЗЫВЫ</button>
            </Col>
        </>
    );
}

export default Comments;