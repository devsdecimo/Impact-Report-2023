import styled from "styled-components";

export const YoutubeVideoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:6rem 0;

    iframe{
        width:741.33px;
        height:417px;
        @media (max-width:829px){
            width:90vw;
            height:50.62vw;
        }
    }

  
`;