import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginSignup.scss'
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err_visible, setErrVisible] = useState(false);
  const navigate = useNavigate()

  const SubmitLogin = async (email: string, password: string) => {
    const resp = await axios.post('http://localhost:8080/login', {
      email: email,
      password: password
    })
  
    if (resp.data.message !== 'success') {
      console.log(resp.data)
      setErrVisible(true)
      return
    }
  
    const session_id = resp.data.id
    navigate('/dashboard', {state: {session_id: session_id}})
  }

  return (
    <>
      <h1 className='spaced-text'>FACTORY FUSE</h1>
      <div className='login'>
        <div className='login-container'>
          <Box sx={{ 
            display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem'}}>
            <TextField type='text' label='Email' placeholder='john@john.doe' 
              onChange={(e) => setEmail(e.target.value)}/>
            <TextField type='password' label='Password'
              onChange={(e) => setPassword(e.target.value)}/>
          </Box>
          <div className='login-buttons'>
            <Button variant='contained' className='login-but' onClick={() => SubmitLogin(email, password)}>Log In</Button>
            <Link to='/signup'>
              <Button variant='contained' className='login-but'>Sign Up</Button>
            </Link>
          </div>
          
          <div className="if_err">
            {err_visible ? <p>Invalid email or password</p> : null}
          </div>
        </div>
      </div>
    </>
  )
}