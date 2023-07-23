import React from "react";
import './Header.css';
import { Button, Image } from "@mantine/core";

const Header = (props) => {
    return (
        <div className="header-main-container">
            <div className="hamburger-container">
                {/* <Image maw={20} mx="auto" radius="md" src="./glyphicons-basic-600-menu-7ef6e3f4266b4b216a8ef5920da43fc8c96e1ee805a219c5628fed5bfac854d5.svg" color="#fff" alt="Random image" /> */}
            </div>
            <Image maw={80} mx="auto" src="./blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" color="#fff" alt="Random image" />
        </div>
    )
}

export default Header;