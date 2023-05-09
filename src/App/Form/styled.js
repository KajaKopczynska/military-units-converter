import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 8px;
    background-color: rgb(245, 249, 255);
    padding: 5px;
    max-width: 330px;
    height: 455px;
    background: #D5C9AF;
    box-shadow: 10px 10px 49px #000000,
        -10px -10px 49px #616161;
    border: 5px solid brown;
    border-image: url(https://dspl.innogamescdn.com/asset/c1748d3c/graphic/start2/border-input.jpg) 3 repeat;
    background: url(https://dspl.innogamescdn.com/asset/c1748d3c/graphic/start2/background.jpg) #c9b997;
    
`;

export const Header = styled.h1`
    font-size: 22px;
    font-weight: 500;
    line-height: 1.4;
`;

export const Currency = styled.select`
    margin: 10px;
    width: 110px;
    height: 30px;
    background: #e1cfb2;
    border: 3px solid brown;
    border-image: url(https://dspl.innogamescdn.com/asset/c1748d3c/graphic/start2/border-input.jpg) 3 repeat;
`;

export const Amount = styled.input`
    width: 110px;
    height: 30px;
    background: #e1cfb2;
    padding-left: 15px;
    border: 3px solid brown;
    border-image: url(https://dspl.innogamescdn.com/asset/c1748d3c/graphic/start2/border-input.jpg) 3 repeat;
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    color: #222;
    width: 270px;
    background: #8D7C58;
    box-shadow: 2px 2px 5px #616161,
        -2px -2px 5px #616161;
    transition: 0.3s;
    border: 3px solid brown;
    border-image: url(https://dspl.innogamescdn.com/asset/c1748d3c/graphic/start2/border-input.jpg) 3 repeat;

    &:hover {
    color: #540909;
    background: #726A5A;
    }
`;

export const StyledResult = styled.div`
    margin: 0 auto;
    padding: 5px;
    width: 270px;
    font-weight: 400;
    line-height: 1.3;
    color: #222;
    background: #e1cfb2;
    text-align: left;
    border: 3px solid brown;
    border-image: url(https://dspl.innogamescdn.com/asset/c1748d3c/graphic/start2/border-input.jpg) 3 repeat;
`;
