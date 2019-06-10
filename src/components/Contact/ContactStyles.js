import styled from "styled-components";
import contactBg from "../../Images/contact-bg.jpg";

export const ContactContainer = styled.div`
  background-image: ${`url(${contactBg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 22px;
  position: relative;
  z-index: 1;
`;

export const Container = styled.div`
  background-image: linear-gradient(180deg, rgba(255, 45, 0, 0.5) 0%, rgba(247, 146, 12, 0.5) 100%);
  background: #fb7e0c;
  box-shadow: 0 2px 27px 3px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  max-width: 575px;
  padding: 25px 20px;
  z-index: 10;
  position: relative;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 1.9375rem;
  margin-bottom: 40px;
  text-align: center;
`;

export const Form = styled.form`
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
`;

export const Input = styled.input`
  background-color: transparent;
  border-radius: 30px;
  border: 1px solid white;
  box-sizing: border-box;
  color: white;
  display: block;
  font-size: 0.875rem;
  letter-spacing: 2px;
  margin-bottom: 20px;
  padding: 16px 30px 16px 50px;
  width: 100%;
`;

export const Textarea = styled.textarea`
  background: transparent;
  border-radius: 30px;
  border: 1px solid white;
  box-sizing: border-box;
  color: white;
  font-size: 0.875rem;
  letter-spacing: 1px;
  margin-bottom: 25px;
  padding: 16px 30px;
  width: 100%;
  resize: none;
`;

export const Button = styled.button`
  background: white;
  border-radius: 30px;
  color: #f37300;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 55px;
  text-transform: uppercase;
`;

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 40px;
`;

export const ImagesContainer = styled.div`
  box-shadow: 0 0 34px 1px rgba(0, 0, 0, 0.5);
  position: relative;
  background-color: #fff;
`;

export const Images = styled.div`
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
`;

export const Logo = styled.img``;