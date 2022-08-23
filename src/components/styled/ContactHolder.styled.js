import styled from 'styled-components';

const ContactHolder = styled.div`
    text-align: center;
    margin: 0 auto;
    padding: 1rem 0;
    width: 40rem;
    height: 70rem;
    background-color: rgba(0, 45, 55, 0.5);

    input {
        width: 20rem;
        text-align: center;
        background-color: antiquewhite;
    }

    textarea {
        width: 20rem;
        height: 10rem;
        text-align: center;
        background-color: antiquewhite;
    }

    fieldset{
        input, textarea{
            border-radius: 0.2rem;
        }

        legend{
            margin: 0 auto;
        }
        
        #submit{
            cursor: pointer;
            width: 8rem;
            height: 2rem;
        }

        width: 30rem;
        margin: 0 auto;
        padding: 2rem 0;
    }

    #btn-contact{
        text-align: start;
        padding-left: 2rem;
        button{
            cursor: pointer;
            border-style: none;
            background-size: cover;
            background-color: transparent;
            background-image: url('https://cdn-icons-png.flaticon.com/512/892/892657.png');
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1);
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`;

export default ContactHolder;