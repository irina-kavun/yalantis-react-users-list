import React, {useState, useEffect, useCallback} from 'react';
import api from './api';

import {UsersList, ListWrap} from './components/UsersList';

import styled from 'styled-components';

export const IndexPage = () => {
  const [responseData, setResponseData] = useState('');

  const groupData = (data) => {
      return data.sort((a,b) => new Date(a.dob).getMonth() - new Date(b.dob).getMonth())
          .reduce((acc,cur)=> {
              let formatedMonth = new Date(cur.dob).toLocaleDateString("en-US", {
                  month: "long"
              });
              acc[formatedMonth] = [...acc[formatedMonth] || [], cur];
              return acc;
          }, {});
  };

  const fetchData = useCallback(() => {
      api.getData()
          .then(response => {
              let resData = groupData(response.data);
              setResponseData(resData);

          })
          .catch(error => {
              console.log(error);
          })
  }, []);

  useEffect(() => {
      fetchData();
  }, [fetchData]);

  const defineBackground = (usersNr) => {
        switch (true) {
            case (usersNr <= 2):
                return 'grey';
            case (usersNr >= 3 && usersNr <= 6):
                return 'blue';
            case (usersNr >= 7 && usersNr <= 10):
                return 'green';
            case (usersNr >= 11):
                return 'red';
            default:
                return false;
        }
    };

    return (
        <section>
            {responseData && Object.entries(responseData).map(([key, value], id) => {
                return (
                    <MonthList key={id} style={{'background-color': defineBackground(value.length)}}>
                        <MonthTitle style={{ 'color': '#FFFFF0'}}>{key}</MonthTitle>
                        <UsersList list={value}/>
                    </MonthList>
                )
            })}
        </section>
  )
};

const MonthList = styled.div`
    width: 50%;
    position: relative;
    text-align: left;
    padding: 15px;
    margin: 0 20px 5px;
    border: 1px solid #DCDCDC;
    &:hover ${ListWrap}{
    opacity: 1
    }
`;

const MonthTitle = styled.h3`
    margin: 0;
`;