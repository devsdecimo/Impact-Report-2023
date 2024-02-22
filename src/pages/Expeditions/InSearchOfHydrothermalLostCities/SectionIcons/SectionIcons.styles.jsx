import styled from "styled-components";

export const SectionIconsContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:80vw;
    max-width:1300px;
    margin:3rem auto;
    justify-content: space-between;
    gap:2rem;
    @media (max-width:829px){
        flex-direction:column;
        gap:0;
    }

`;