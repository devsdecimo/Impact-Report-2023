import styled from "styled-components";

export const ImageWithCircleContainer = styled.div`
    position:relative;
    height:380px;
    width:400px;
    margin-right: ${(props) => (props.orientation && props.orientation == 'left' ? '2rem':'0')};
    margin-left: ${(props) => (props.orientation && props.orientation == 'right' ? '2rem':'0')};
    @media (max-width:829px){
        margin:auto;
    }
    @media (min-width:930px){
        float: ${(props) => (props.orientation ? props.orientation : 'left')};
    }
    @media (max-width:500px){
        transform:scale(0.8);
        //margin-left:-10%;
    }

    img{
        position:absolute;
        width:350px;
        height:auto;
        z-index:3;
        top:50px;
        right:0px;
    }
    .circle1{
        width: 320px;
        height: 320px;
        background-color: #80AED8;
        opacity: 0.1;
        border-radius: 50%;
        position: absolute;
        z-index: 2;
        top: 0;
        right:0;
    }
    .circle2{
        width: 330px;
        height: 330px;
        opacity: 1;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: 0;
        left: -4rem;
    }
    .circle3{
        width: 320px;
        height: 320px;
        background-color: #80AED8;
        opacity: 0.9;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: 0;
        right:0;
    }

  
`;