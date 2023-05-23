import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Dashboard.scss'
import { TextField } from '@mui/material'
import axios from 'axios';

export default function Dashboard() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const {session_id} = useLocation().state;
    const InitDashboard = async () => { 
        const req = await axios.post('http://localhost:8080/checksession', {         
            id : session_id
        });
        if(req.data.status ===  'invalid') {
            console.log(req.data)
            return
        }

        const {user} = req.data;
        setName(user.name);
        setEmail(user.email);
    };

    useEffect(() => {
        InitDashboard();
    });
//koraaaaaaaaay
    return (
        <>
            <h1 className='spaced-text'>FACTORY FUSE Dashboard</h1>
            <h2> I like your {session_id}, G! </h2>
            <h2> {name} - {email} </h2>
        </>
    )
}