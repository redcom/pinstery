import styled from 'styled-components';

// used for style only
const ShopList = styled.div`
  text-align: center;
  width: 80%;
  column-count: 4;
  column-gap: 5em;
  display: block;

  @media (max-width: 700px) {
    column-count: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 700px) and (max-width: 1200px) {
    column-count: 2;
  }
`;

export default ShopList;
