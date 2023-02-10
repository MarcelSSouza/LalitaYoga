import React from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import AnyQuestions from "./AnyQuestions";
import MainFooter from "./MainFooter";
import MenuBar from "./MenuBar";

export default function BookPage() {
    return (
        <div>
            <MenuBar />
            
            <AnyQuestions />
            <MainFooter />
        </div>
    );
}