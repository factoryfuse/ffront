import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Dashboard.scss'
import AppBar from '../comps/AppBar';
import axios from 'axios';
import UploadButton from '../comps/UploadButton';
import ViewContainer from '../comps/ViewContainer';

export default function Dashboard() {
    const [name, setName] = React.useState('');
    const [_email, setEmail] = React.useState('');

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

    return (
        <div className="dashboard">
            <AppBar 
                logo_url="/simfer.png"
                appbar_name='Preshane Planlama Modülü'
                user_name={name} />

            <div className="dashboard-grid">
                <UploadButton dummy=''/>
                <ViewContainer content_type='result'/>
            </div>
            
        </div>
    )
}