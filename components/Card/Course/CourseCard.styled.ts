import styled from "styled-components";

export const CourseCardWrapper = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-height: 15rem;
    min-height: 15rem;
    width: 100%;
    margin: auto;
    background: lightgray;
    border-radius: 4px;
    padding: 1rem;
    transition: transform 0.25s ease-in-out;
    font-family: 'Outfit', sans-serif;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const CourseCardTitle = styled.h3`
    color: black;
    margin: 0;
`;

export const CourseCardDescription = styled.p`
    color: black;
    margin: 1rem 0 0 0;
`;
