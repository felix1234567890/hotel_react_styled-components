import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import heroImg from '../images/hero_background.jpg';
import Btn from '../shared/Button';
import Dots from '../shared/Dots';

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => `url(${props.image}) center no-repeat`};
  background-size: cover;
  background-position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 0;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-color: ${({ theme }) => theme.purpleTransparentAlt};
    z-index: -1;
  }
`;
const MainHeading = styled.div`
  color: #fff;
  line-height: 1;
  text-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.5);
  margin-bottom: 2.5rem;
  & .title {
    font-size: 4.8rem;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  & .subtitle {
    font-size: 3.6rem;
    font-weight: 300;
    font-family: 'Courgette', cursive;
  }
`;

const BtnGradient = styled(Btn)`
  background-image: ${({ theme }) => theme.gradientColor};
  width: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-image: ${({ theme }) => theme.gradientColorAlt};
  }
`;

const Main = () => {
  return (
    <Hero image={heroImg}>
      <MainHeading>
        <h1 className="title">Discover</h1>
        <h2 className="subtitle">Luxury hotels</h2>
      </MainHeading>
      <BtnGradient href="#">
        Explore now
        <Dots>
          <FontAwesomeIcon icon={faEllipsisH} />
        </Dots>
      </BtnGradient>
    </Hero>
  );
};

export default Main;
