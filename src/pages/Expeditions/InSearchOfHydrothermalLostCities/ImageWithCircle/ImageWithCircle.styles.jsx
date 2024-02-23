import styled from "styled-components";

export const ImageWithCircleContainer = styled.div`
    position:relative;
    height:380px;
    width:450px;
    margin-right: ${(props) => (props.orientation && props.orientation == 'left' ? '2rem':'0')};
    margin-left: ${(props) => (props.orientation && props.orientation == 'right' ? '2rem':'0')};
    margin-top:1rem;
    margin-bottom:1rem;
    @media (max-width:829px){
        margin:auto;
        margin-bottom:1rem;
    }
    @media (min-width:930px){
        float: ${(props) => (props.orientation ? props.orientation : 'left')};
        /*margin-top:-2rem;*/
    }
    @media (max-width:500px){
        transform:scale(0.8);
        margin-left:-10%;
    }

    img{
        position:absolute;
        width:350px;
        height:auto;
        z-index:3;
        top:50px;
        right:40px;
    }
    .circle1{
        width: 170px;
        height: 170px;
        background-color: #80AED8;
        opacity: 0.2;
        border-radius: 50%;
        position: absolute;
        z-index: 2;
        top: -1rem;
        right: 100px;
    }
    .circle2{
        width: 330px;
        height: 330px;
        opacity: 0.9;
        background-color: #80AED8;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: 30px;
        left: 0;
    }
    .circle3{
        width: 200px;
        height: 200px;
        background-color: #80AED8;
        opacity: 0.5;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
    }

  
`;