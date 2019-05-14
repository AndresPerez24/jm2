import React, { Component } from "react";
import styled from "styled-components";

class Contact extends Component {
  render() {
    return (
      <ContactContainer>
        <Container>
          <Title>Contáctenos</Title>
          <Form action="">
            <Input type="text" name="Nombre" placeholder="Nombre" />
            <Input type="text" name="Celular" placeholder="Celular" />
            <Input type="text" name="Email" placeholder="Email" />
            <Input type="text" name="Ciudad" placeholder="Ciudad" />
            <Textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Déjenos su mensaje o solicitud de su producto 
y le responderemos en la menor brevedad posible."
            />
            <Button>Enviar</Button>
          </Form>
        </Container>
      </ContactContainer>
    );
  }
}

const ContactContainer = styled.div`
  padding: 50px 0;
`;

const Container = styled.div`
  max-width: 575px;
  margin: 0 auto;
  padding: 25px 20px;
  opacity: 0.9;
  background: #ff7e01;
  background: -webkit-linear-gradient(top, #ff7e01, #f9973d);
  background: -moz-linear-gradient(top, #ff7e01, #f9973d);
  background: linear-gradient(to bottom, #ff7e01, #f9973d);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.9375rem;
  color: #ffffff;
  margin-bottom: 40px;
`;

const Form = styled.form`
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding-left: 50px;
  box-sizing: border-box;
  padding: 16px 30px;
  margin-bottom: 20px;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 30px;
  color: white;
  font-size: 0.875rem;
  letter-spacing: 2px;
`;

const Textarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: 1px solid white;
  border-radius: 30px;
  padding: 16px 30px;
  font-size: 0.875rem;
  color: white;
  box-sizing: border-box;
  letter-spacing: 1px;
  margin-bottom: 25px;
`;

const Button = styled.button`
  font-size: 14px;
  padding: 10px 55px;
  background: white;
  border-radius: 30px;
  color: #f37300;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

export default Contact;
