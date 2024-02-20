import styled from "styled-components";

export const ImageWithCircle2Container = styled.div`
    position:relative;
    height:380px;
    width:440px;
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
        margin-left:-10%;
    }

    img{
        position:absolute;
        width:350px;
        height:auto;
        z-index:1;
        top:0px;
        left:0px;
    }
    .circle1{
        width: 220px;
        height: 220px;
        background-color: #aae4f2;
        opacity: 0.9;
        border-radius: 50%;
        position: absolute;
        z-index: 0;
        top: -0.5rem;
        left: 15rem;
    }
    .circle2{
        width: 170px;
        height: 170px;
        opacity: 1;
        border-radius: 50%;
        position: absolute;
        z-index: 2;
        top: 12rem;
        left: 16rem;
    }

  
`;