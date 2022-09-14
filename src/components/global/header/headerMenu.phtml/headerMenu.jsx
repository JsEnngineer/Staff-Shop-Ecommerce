import React from 'react'
import { Image, Nav, Navbar } from 'react-bootstrap'
import { Cart } from 'react-bootstrap-icons'
import { useHistory } from 'react-router-dom'
import LikeHeart from '../../../../assets/img/like.svg';

export default function HeaderMenu() {

    const history = useHistory()


    return (
        <>
            <Navbar.Brand className="m-auto d-flex align-items-center" onClick={() => history.push('/')}>STAFF <p className="mt-2 font-weight-light"></p>
            </Navbar.Brand>
            <p className="mt-3 d-none d-lg-block font-weight-bold">050 362-04-05 </p>
            <button><Image src={LikeHeart} className="ml-md-5" /></button>
            <Nav.Link><Cart className="ml-md-3" /></Nav.Link>
            <Nav className="nav__wrp w-100 d-none d-lg-flex" >
                <Nav.Link className="navigation__links" href="#categories">Скидки</Nav.Link>
                <Nav.Link className="navigation__links" href="#categories">Новинки</Nav.Link>
                <Nav.Link className="navigation__links" href="#categories">Staff Basic</Nav.Link>
                <Nav.Link className="navigation__links" href="#categories">Обувь</Nav.Link>
                <Nav.Link className="navigation__links" href="#blog">Рюкзаки и сумки</Nav.Link>
                <Nav.Link className="navigation__links" href="#showroom">Аксессуары</Nav.Link>
            </Nav>
        </>
    )
}
