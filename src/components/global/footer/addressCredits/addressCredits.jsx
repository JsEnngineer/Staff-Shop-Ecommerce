import React from 'react'
import { Col } from 'react-bootstrap';
import './index.css'

function AddressCredits() {
    return (
        <Col className="working__process-info d-flex text-center align-items-start flex-xl-row flex-column px-0">
            <p className=" font-weight-bold text-left address"> <span className="d-block">АДРЕС: </span>г. Киев, ул. Николая Лаврухина, 4, ТРЦ"Район"</p>
            <p className="pl-xl-5 pl-0 font-weight-bold text-left working-time"> <span className="d-block">РЕЖИМ РАБОТЫ: </span>с 10.00 до 22.00 шоурум: с 12.00 до 22.00</p>
        </Col>
    );
}

export default AddressCredits;