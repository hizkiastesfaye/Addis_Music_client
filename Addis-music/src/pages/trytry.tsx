/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {css} from "@emotion/react"
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { DefaultTheme } from 'styled-components';

const Button = styled.button`
    background-color:blue;
    &:hover{
        background-color:red;
    }
    `;

const Card = styled.div`
    background-color:green;
    border-radius:8px;
    `;

const Container = styled.div`
    background-color: red;
    h1{
        color:#333
    };
    p{
        color:#666
    };
    @media (max-width:400px){
        background-color: blue;
        padding:30px;
    }
    `;

interface Allprops{
    primary?:boolean,
    secondary?:boolean,
    isActive?:boolean,
    }
const Button2 = styled.button<Allprops>`
    padding: 10px 30px;
    background-color: ${(prop)=>(prop.primary ? 'yellow' : prop.secondary ? 'red' : 'gray')};
    
    &:hover{
        background-color: ${(props)=>(props.primary ? '#3700b3' : props.secondary ? '#e0e0e0' : 'blue')};
        }
    `;
const Togglee = styled.button<Allprops>`
    padding:30px;
    background-color: ${(props)=>(props.isActive ? 'red' : 'green')}

    `;
 

interface CustomTheme extends DefaultTheme {
    colors: {
    primary: string;
    secondary: string;
    background: string;
    };
}
const theme: CustomTheme = {
    colors:{
        primary: '#6200ea',
        secondary:'#03dac6',
        background:'blue'
    }
}
const Div1 = styled.div<Allprops>`
    background-color:${(props)=>props.theme.colors.secondary}
    `;
export default function Trytry(){
    const [isActive,setIsActive] = useState(false)
    const handleButton = ()=>{
        setIsActive(!isActive)
    }
    return <>
        <div>
            <button >This try page</button>
            <p css={css`background-color:yellow`}>
                Click on the Vite and React logos to learn more
            </p>
            <Button>
                Click on the Vite and React logos to learn more
            </Button>
            <Card>This is card style</Card>
        </div>
        <Container>
            <h1>This container</h1>
            <p>Here is details about container</p>
        </Container>
        <Button2 primary>
            Click here for more information.
        </Button2>
        <Button2 secondary>
            Click here for more information.
        </Button2>
        <Button2>
            Click here for more information.
        </Button2>
        <Togglee isActive={isActive} onClick={handleButton}>
            check toggle
        </Togglee>
        <ThemeProvider theme={theme}>
            <Div1>Your app conent here</Div1>
        </ThemeProvider>

    </>
}