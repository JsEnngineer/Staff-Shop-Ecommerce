import React, { useContext, useEffect } from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import './index.css'
import Sidebar from './categoriesMenu/categoriesMenu';
import Burger from './burger/burger';
import { navigationContext } from '../../../context/navigationContext';
import HeaderMenu from './headerMenu.phtml/headerMenu';
import SocialIconLinks from '../../common/socialIconLinks/socialIconLinks'

function Navigation() {


    const location = useLocation()

    const { burger, setBurger } = useContext(navigationContext)

    useEffect(() => {
        return !burger ? setBurger(!burger) : setBurger(burger)
    }, [location.pathname])


    return (
        <Container>
            {
                !burger ? (
                    <>
                        <Sidebar />
                        <Navbar expand="false" className={!burger ? "color__switch" : ""}>

                            <Burger burger={burger} setBurger={setBurger} />
                            <SocialIconLinks />
                            <HeaderMenu />
                        </Navbar>
                    </>
                ) :
                    (
                        <Navbar expand="false" className={!burger ? "color__switch" : ""}>

                            <Burger burger={burger} setBurger={setBurger} />
                            <SocialIconLinks />
                            <HeaderMenu />
                        </Navbar>
                    )
            }
        </Container >
    )
}

export default Navigation
