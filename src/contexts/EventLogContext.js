import React, {createContext, useReducer, useEffect} from 'react';
import {eventLogReducer} from '../reducers/EventLogReducer';

export const EventLogContext = createContext();

const EventLogContextProvider = props => {
    const [events, dispatch] = useReducer(eventLogReducer, []);

    const getData = async () => {
        fetch('https://ldnmnsqigb.execute-api.us-east-1.amazonaws.com/dev/hvac-eventlog/')
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: 'ADD_EVENTS',
                events: data
            })
        })
        .catch(console.log);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <EventLogContext.Provider value={{events, dispatch}}>
            {props.children}
        </EventLogContext.Provider>
    );
};

export default EventLogContextProvider;