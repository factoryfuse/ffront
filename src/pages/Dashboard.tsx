import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Dashboard.scss'
import { TextField } from '@mui/material'

export default function Dashboard() {
    const {session_id} = useLocation().state;
    
    return (
        <>
            <h1 className='spaced-text'>FACTORY FUSE Dashboard</h1>
            <h2> I like your {session_id}, G! </h2>
        </>
    )
}