import styled from "styled-components";

export const SectionIconsContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:80vw;
    max-width:1200px;
    margin:3rem auto;
    justify-content: space-between;
    gap:2rem;
    @media (max-width:829px){
        flex-direction:column;
        gap:0;
        margin-top: 0;
        margin-bottom: 2rem;
        margin-left: auto;
        margin-right: auto;
    }

`;