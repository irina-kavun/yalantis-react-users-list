import React from 'react';
import {UserItem} from './UserItem';

import styled from 'styled-components';

export const UsersList = ({list}) => {
    const usersList = list.map((item, id) => <UserItem key={id} firstName={item.firstName} lastName={item.lastName} dob={item.dob}/>);

    return (
        <ListWrap>
            <List>
                {usersList}
            </List>
        </ListWrap>
    )
};

export const ListWrap = styled.div`
    position: absolute;
    top: 0;
    right: -320px;
    transition: opacity .4s;
    opacity: 0;
    z-index: 1;
`;

const List = styled.ul`
    position: relative;
    margin: 0;
    
    &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    border: 10px solid #737373;
    border-color: transparent #737373 transparent transparent;
    }
`;