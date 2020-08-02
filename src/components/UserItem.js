import React from 'react';

import styled from 'styled-components';

export const UserItem = ({firstName, lastName, dob}) => {

return (
    <UserItemBlock>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span>{new Date(dob).toLocaleDateString()}</span>
    </UserItemBlock>
)
};

const UserItemBlock = styled.li`
    font-size: .8em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #C0C0C0;
    padding: 15px 30px;
    min-width: 250px;
    background-color: #DCDCDC;
`;