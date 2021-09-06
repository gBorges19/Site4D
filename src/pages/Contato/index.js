import {React, useState} from 'react';
import { ButtonForm, Container, Formulario, InputEmail, InputForm, Title } from '../Contato/styles';

function Contato(){

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        //{/* --- METHOD TO SEND THE MAIL --- */}
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return(
        <Container>
            <Title>CONTATO</Title>
            <Formulario onSubmit={onSubmit}>

                <InputForm
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                    >
                </InputForm>
                <InputForm
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                >
                </InputForm>

                <InputForm
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                >
                </InputForm>

                <InputEmail
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                >
                </InputEmail>

                <ButtonForm type='submit'>Submit</ButtonForm>

            </Formulario>
        </Container>

    )


}

export default Contato;