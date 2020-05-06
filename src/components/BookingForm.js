import React from 'react';
import Container from '../shared/Container';
import styled from 'styled-components';
import Dots from '../shared/Dots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import FormBtn from '../shared/FormButton';

const Booking = styled.div`
  padding: 30px 0;
  background-image: ${(props) => props.theme.gradientColor};
`;

const Form = styled.form``;
const Select = styled.select``;
const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & label {
    display: block;
    font-size: 1.3rem;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  & input,
  ${Select} {
    outline: none;
    border: none;
    width: 100%;
    max-width: 600px;
    min-height: 4rem;
    padding: 1rem;
    font-weight: bold;
    color: #a5a5a5;
    letter-spacing: 2px;
    font-family: 'Open Sans', sans-serif;
  }
`;

const BookingForm = () => {
  return (
    <Booking>
      <Container>
        <Form>
          <InputGroup>
            <label htmlFor="destination" className="input-label">
              Destination
            </label>
            <input type="text" id="destination" className="input" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="check-in" className="input-label">
              Check in
            </label>
            <input type="date" id="check-in" className="input" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="check-out" className="input-label">
              Check out
            </label>
            <input type="date" id="check-out" className="input" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="adults" className="input-label">
              Adults
            </label>
            <Select id="adults">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <label htmlFor="children" className="input-label">
              Children
            </label>
            <Select id="children">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
          </InputGroup>
          <FormBtn style={{ margin: '0 auto' }}>
            Search
            <Dots>
              <FontAwesomeIcon icon={faEllipsisH} />
            </Dots>
          </FormBtn>
        </Form>
      </Container>
    </Booking>
  );
};

export default BookingForm;
