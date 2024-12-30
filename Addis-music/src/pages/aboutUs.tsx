/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled";


const MainAbout= styled.div`
    margin: 60px 20%;
    p{
        font-size:20px;
        font-weight:100;
    }
`;

export default function AboutUs(){
    return<>
    <MainAbout>
        <p>
            Welcome to our Music Management Application, <br /><br/>
            This platform dedicated is to simplifying the way you organize,
            explore, and manage your favorite songs. <br/>
            Built with cutting-edge technology like React, Node.js, 
            and MongoDB.<br/> 
            our application provides an intuitive 
            interface for creating, editing, and exploring your 
            music library.<br/> <br/>
            Whether you're an artist, a music 
            enthusiast, or just someone looking to curate a 
            personalized playlist, our app empowers you to manage 
            your music effortlessly.<br/> 
            From tracking genres and albums to generating insightful
            statistics about your collection.<br/><br/>
            we aim to deliver a seamless and dynamic experience that
            keeps your passion for music alive. Designed with 
            user-centric functionality and scalability in mind, 
            this project reflects our commitment to innovation and 
            excellence in music technology.            
        </p>
        <p>Thank you for joining our community.</p>
        </MainAbout>
    </>
}