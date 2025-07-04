import styled from 'styled-components';

export const IconWithTextContainer = styled.div`
  align-items: flex-start;
  color: #3E5973;
  cursor: ${(props) => (props.href ? 'pointer' : 'default')};
  display: flex;
  font-style: normal;
  font-weight: 400;
  opacity: ${(props) => props.opacity || 1};
  margin-top:10px;

  img {
    height: 1.7rem;
    margin-right: 0.5rem;
    transition: margin-right 0.3s ease;
    width: 1.5em;
  }

  strong, .text-bold {
    font-weight: bold;
    transition: all 0.3s ease;
  }

  span.ml-10{
    margin-left:4px;
  }
  
  .text-before{
    flex: 0 0 auto; 
    white-space: nowrap;
  }

`;
