import styled from "styled-components";

export const SectionBrandsContainer = styled.div`
    width:100vw;
    background-color:white;
    padding:20px 0;
    margin-top:2rem;

    .brands-container{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:90vw;
        max-width:1400px;
        margin:auto;
        gap: 2rem;
    }

    img{
        @media (min-width:1100px){
            max-width:100px;
            max-height:7.5vw;
            width: 100%;
        }
        
    }

    .only-mobile{
        @media (min-width:1100px){
            display:none;
        }
    }
    .only-desktop{
        @media (max-width:1099px){
            display:none;
        }
    }
    /*
    img:nth-child(1){
        height:100px;
    }
    img:nth-child(2){
        height:100px;
    }
    img:nth-child(3){
        height:100px;
    }
    img:nth-child(4){
        height:100px;
    }
    img:nth-child(5){
        height:100px;
    }
    img:nth-child(6){
        height:100px;
    }
    img:nth-child(7){
        height:100px;
    }
    img:nth-child(8){
        height:100px;
    }
    img:nth-child(9){
        height:100px;
    }
    img:nth-child(10){
        height:100px;
    }
    img:nth-child(11){
        height:100px;
    }*/
    

  
`;