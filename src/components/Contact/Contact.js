import React, { Component } from "react";
import { ContactContainer, Container, Title, Form, Input, Textarea, Button, Img } from "./ContactStyles";
import engineer from "../../Images/engineer.png";

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
        <Img src={engineer} />
      </ContactContainer>
    );
  }
}

export default Contact;
