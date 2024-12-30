/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled";


const MainAbout= styled.div`
    margin: 60px 20%;
    height:50vh;
`;

export default function AboutUs(){
    return<>
    <MainAbout>
        <p>
            Welcome to our Music Management Application, 
            a platform dedicated to simplifying the way you organize,
            explore, and manage your favorite songs. 
            Built with cutting-edge technology like React, Node.js, 
            and MongoDB, our application provides an intuitive 
            interface for creating, editing, and exploring your 
            music library. Whether you're an artist, a music 
            enthusiast, or just someone looking to curate a 
            personalized playlist, our app empowers you to manage 
            your music effortlessly. From tracking genres and albums 
            to generating insightful statistics about your collection,
            we aim to deliver a seamless and dynamic experience that
            keeps your passion for music alive. Designed with 
            user-centric functionality and scalability in mind, 
            this project reflects our commitment to innovation and 
            excellence in music technology.            
        </p>
        </MainAbout>
    </>
}