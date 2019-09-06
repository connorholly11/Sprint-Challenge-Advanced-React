import React from 'react';
import {useAxiosCall} from '../customHooks/axiosCall';

const PlayerCard = (props) => {

    const playersApi = 'http://localhost:5000/api/players';
    const apiCall = useAxiosCall({
        url: playersApi
    })
    console.log('apicall', apiCall)

    return(
        
        <div>
            {/* <h1>{apicall}</h1> */}
            <p>{props.player}</p>
        </div>
    )
}

export default PlayerCard;