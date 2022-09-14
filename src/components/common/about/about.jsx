import React from 'react';
import aboutPhoto from '../../../assets/img/about.png'
import vector from '../../../assets/img/vector.png'
import vector2 from '../../../assets/img/vector2.png'
import { Row, Col, Image, Container } from 'react-bootstrap';
import './index.css'

function About() {
    return (
        <Container fluid>
            <div className="text-center mb-5" id='blog'>
                <h4 className="card-title ">ABOUT STAFF</h4>
            </div>
            <Row className="position-relative p-3 mb-5">
                <Col lg={6} sm={12}>
                    <Image src={aboutPhoto} className="about__photo" />
                    <Image className="vector position-absolute" src={vector} />
                    <Image className="vector2 position-absolute" src={vector2} />
                </Col>
                <Col lg={4} sm={11} className="d-flex card-text justify-content-center align-items-center flex-column  mr-auto">
                    <div>
                        <p className="text-card p-3">
                            История компании Staff началась в 2013 году. Основатели — энергичные и креативные ребята, братья из небольшого города в западной части Украины, — решили направить свою деятельность на развитие украинской streetwear культуры. Осенью того же года первым релизом была выпущена парка под названием Staff. Она стала первой ласточкой в широком ассортименте моделей компании, разработанных и воплощенных в жизнь. Украинцы поддержали молодежный бренд и приветствовали появление новинок.

                            В 2015 году коллекции бренда Staff включали в себя как верхнюю одежду, так и обувь. Кредо компании-постоянное движение вперед. С каждым релизом мы ставим перед собой новые задачи и работаем на максимальный результат.
                        </p>
                        <a href="/" className="about__btn">Подробнее</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;