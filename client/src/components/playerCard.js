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
            {/* {apiCall.map(player => {
                return player={player}
            })} */}
            {props.player}
        </div>
    )
}

export default PlayerCard;