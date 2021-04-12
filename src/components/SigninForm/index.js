import React from 'react'
import { SigninWrapper, SigninContainer, SigninLogo, SigninTitle, SigninSubtitle, SigninFields, UserName, UserInput, Password, PasswordInput, SigninBtn, SigninLinkWrapper, SigninLink} from './SigninElements'
const SigninForm = () => {
    return (
        <SigninWrapper>
        <SigninContainer>
            <SigninLogo />
            <SigninTitle to='/'>Dollo</SigninTitle>
            <SigninSubtitle>Virtual Bank</SigninSubtitle>
            <SigninFields>
                <UserName>
                    <UserInput placeholder="User Name" type="text" />
                </UserName>
                <Password>
                    <PasswordInput placeholder="Password" type="password" />
                </Password>
                <SigninBtn>Sign In</SigninBtn>
                <SigninLinkWrapper>
                    <SigninLink>Forget Password </SigninLink>
                    or
                    <SigninLink to='/'> Sign Up</SigninLink>
                </SigninLinkWrapper>
            </SigninFields>
        </SigninContainer>
        </SigninWrapper>
    )
}

export default SigninForm
