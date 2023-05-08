import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 8px;
    background-color: rgb(245, 249, 255);
    padding: 5px;
    max-width: 330px;
    height: 455px;
    border-radius: 20px;
    background: #D5C9AF;
    box-shadow: 10px 10px 49px #000000,
        -10px -10px 49px #616161;
`;

export const Header = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;

export const Currency = styled.select`
    margin: 10px;
    padding: 5px;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background: #F1EEE9;
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    border-radius: 5px;
    color: #000000;
    border-radius: 5px;
    width: 200px;
    background: #8D7C58;
    box-shadow: 3px 3px 12px #616161,
        -3px -3px 6px #616161;
    transition: 0.3s;

    &:hover {
    color: #eee;
    border-radius: 5px;
    background: #726A5A;
    }
`;

export const Amount = styled.input`
    border-radius: 5px;
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background: #EDE8DE;
    padding-left: 15px;
`;

export const StyledResult = styled.div`
    margin: 0 auto;
    padding: 10px;
    width: 200px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 20px;
    margin-top: 20px;
    color: #000000;
    border-radius: 10px;
    background: #EDE8DE;
    box-shadow: inset 5px 5px 12px #616161,
        inset -5px -5px 12px #616161;
    text-align: left;
`;