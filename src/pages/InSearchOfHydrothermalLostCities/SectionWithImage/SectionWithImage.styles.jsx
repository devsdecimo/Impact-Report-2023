import styled from "styled-components";

export const SectionWithImageContainer = styled.div`
    width:50vw;
    margin:auto;
    padding-top:2rem;
    @media (max-width:829px){
        width:80vw;
    }

    .image-container{
        position:relative;
        height:250px;
        width:230px;
        margin-left:20px;
        margin-bottom:50px;
        @media (max-width:829px){
            margin:auto;
        }
    }

    img.pos-absolute{
        position: absolute;
        width: 350px;
        height: auto;
        z-index: 2;
        top: -30px;
        right: -30px;
    }
    .circle1{
        width: 180px;
        height: 180px;
        background-color: #80AED8;
        opacity: 0.7;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: 0;
        right: 35px;
    }
    .circle2{
        width: 120px;
        height: 120px;
        background-color: #80AED8;
        opacity: 0.4;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: 100px;
        right: 110px;
    }

    h2.title{
        display:flex;
        justify-content: center;
        gap:15px;
        color:#3E5973;
    }
    .icons-container{
        width:90%;
        margin:auto;
        @media (max-width:829px){
            width:100%;
        }
    }

  
`;