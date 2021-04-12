import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const SigninWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    align-self: center;
    background: #E1EAF4;
    height: 100vh;
`
export const SigninContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 700px;
    padding: 60px 35px 35px 35px;
    border-radius: 40px;
    background: #ecf0f3;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;

    @media screen and (margin-width: 768px){
        width: 90%;
    }
`
export const SigninLogo = styled.div`
    background: url('https://image.shutterstock.com/image-vector/bank-icon-vector-isolated-260nw-668137015.jpg') no-repeat center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
    box-shadow: 0px 0px 2px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px -5px #a7aaaf, -8pc -8pc 10px #ffffff;
`
export const SigninTitle = styled(LinkR)`
    text-align: center;
    font-size: 28px;
    padding-top: 24px;
    letter-spacing: 0.5px;
    cursor: pointer;
    text-decoration: none;
`
export const SigninSubtitle = styled.div`
    text-align: center;
    font-size: 15px;
    padding-top: 7px;
    letter-spacing: 3px;
`
export const SigninFields = styled.div`
    width: 100%;
    padding: 75px 5px 5px 5px;
`

export const UserName = styled.div`
    margin-bottom: 30px;
    border-radius: 25px;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
`
export const Password = styled.div`
    margin-bottom: 30px;
    border-radius: 25px;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
`
export const UserInput = styled.input`
    border: none;
    outline: none;
    background: none;
    width: 95%;
    font-size: 15px;
    color: #555;
    padding: 20px 10px 10px 10px;
`
export const PasswordInput = styled.input`
    border: none;
    outline: none;
    background: none;
    width: 95%;
    font-size: 15px;
    color: #555;
    padding: 20px 10px 10px 10px;
`
export const SigninBtn = styled.button`
    outline: none;
    border:none;
    cursor: pointer;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #fff;
    transition: all 0.2s ease-in-out;
    background: #1da88a;

    &:hover {
        background: #2fdbb6;
    }

    &:active {
        background: #1da88a;
    }
`
export const SigninLinkWrapper = styled.div`
    padding-top: 20px;
    text-align: center;
`
export const SigninLink = styled(LinkR)`
    text-decoration: none;
    color: #aaaaaa;
    font-size: 15px;
`