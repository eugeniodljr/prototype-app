import styled from "styled-components";

const InfoCardHolder = styled.div`
    width: 40rem;
    margin: 0 auto;
    padding: 1.5rem;
    min-height: 50rem;
    background-color: rgba(0, 45, 55, 0.6);

    .info-image{
        width:15rem;
    }

    img{
        margin: 0 1.5rem 1rem 0;
        width: 100%;
        height: auto;
        float:left;
        border: 0.0006rem solid antiquewhite;
    }

    .main-info{
        min-height: 20rem;

        p{
            line-height: 1.8;
        }
    }

    .smaller{
        font-size: 0.92rem;
    }

    .flex{
        text-align: center;
        display: flex;

        p{
            margin: 0.5rem 0.5rem;
        }
    }

    .float-buttons{
        float: right;

        button{
            cursor: pointer;
            margin: 0 0.7rem;
            padding: 0.5rem 0.7rem;
            border-radius: 0.3rem;
        }

        .more-info{
            background-color: #99c1f1;
        }

        .read-online{
            background-color: #8ff0a4;
        }        
    }
    #click-here{
        text-decoration: none;
        color: antiquewhite;
    }

    #btn-info-card{
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

export default InfoCardHolder;