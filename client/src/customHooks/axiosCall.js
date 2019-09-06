import {useState, useEffect} from 'react'
import axios from 'axios';

export const useAxiosCall = (request) => {

    const [response, setResponse] = useState( () => ({
        data:null,
        pending:false,
        completeled:false,
        failed:false
    }))

    useEffect(() => {
        setResponse({
        data:null,
        pending:true,
        completeled:false,
        failed:false
        })
        axios(request)
            .then(response => {
                setResponse({
                    data:response.data,
                    pending:false,
                    completeled:true,
                    failed:false
                })
            })
    }, [request.url])

    return [response];
}

