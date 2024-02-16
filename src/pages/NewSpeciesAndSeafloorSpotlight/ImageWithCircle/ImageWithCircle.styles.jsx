import styled from "styled-components";

export const ImageWithCircleContainer = styled.div`
    position:relative;
    height:320px;
    width:320px;
    margin-left:20px;
    margin-bottom:50px;
    @media (max-width:829px){
        margin:auto;
    }

    img{
        position:absolute;
        width:250px;
        height:auto;
        z-index:2;
        top:50px;
        right:0px;
    }
    .circle1{
        width:168px;
        height:168px;
        background-color:#80AED8;
        opacity:0.4;
        border-radius:50%;
        position:absolute;
        z-index:1;
        top:0;
        left:30px;
    }
    .circle2{
        width:108px;
        height:108px;
        background-color:#80AED8;
        opacity:0.6;
        border-radius:50%;
        position:absolute;
        z-index:1;
        top:100px;
        left:00px;
    }

  
`;