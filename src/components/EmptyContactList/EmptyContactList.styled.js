import styled from 'styled-components';

export const StyledImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: clamp(200px, 50%, 400px);
    height: auto;
    object-fit: contain;

    @media (max-width: 768px) {
      width: clamp(150px, 60%, 300px);
    }

    @media (max-width: 480px) {
      width: clamp(120px, 70%, 250px);
    }
  }
`;
