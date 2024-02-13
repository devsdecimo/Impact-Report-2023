import styled from 'styled-components';

export const IconWithTextContainer = styled.div`
  align-items: center;
  color: #3E5973;
  cursor: ${(props) => (props.href ? 'pointer' : 'default')};
  display: flex;
  font-family: 'Adobe Garamond Pro', serif;
  font-style: normal;
  font-size: 1.5rem;
  font-weight: 400;
  opacity: ${(props) => props.opacity || 1};

  img {
    height: 2em;
    margin-right: 0.5rem;
    transition: margin-right 0.3s ease;
    width: 2em;
  }

  strong {
    font-weight: bold;
    transition: all 0.3s ease;
  }
`;
