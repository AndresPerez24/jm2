import React, { Component, Fragment } from "react";
import { ContactContainer, Container, Title, Form, Input, Textarea, Button, Img, ImagesContainer, Images, Logo } from "./ContactStyles";
import engineer from "../../Images/engineer.png";
import ruedas from "../../Images/ruedas.png";
import partes from "../../Images/partes.png";
import equipos from "../../Images/equipos.png";

class Contact extends Component {
  render() {
    return (
      <Fragment>
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
        <ImagesContainer>
          <Images>
            <Logo src={ruedas} />
            <Logo src={partes} />
            <Logo src={equipos} />
          </Images>
        </ImagesContainer>
      </Fragment>
    );
  }
}

export default Contact;
