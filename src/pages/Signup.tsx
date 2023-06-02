import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginSignup.scss'
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err_visible, setErrVisible] = useState(false);
  const navigate = useNavigate();

  const SubmitSignup = async (name: string, email: string, password: string) => {
    const resp = await axios.post('http://localhost:8080/signup', {
      name: name,
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
      <div className='signup'>
        <div className='signup-container'>
          <Box sx={{ 
              display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem'}}>
              <TextField type='text' label='Name' placeholder='John Doe' 
                onChange={(e) => setName(e.target.value)}/>
              <TextField type='text' label='Email' placeholder='john@john.doe' 
                onChange={(e) => setEmail(e.target.value)}/>
              <TextField type='password' label='Password'
                onChange={(e) => setPassword(e.target.value)}/>
            </Box>
            <div className='login-buttons'>
              <Link to='/login'>
                <Button variant='contained' className='login-but'>Log In</Button>
              </Link>
              <Button variant='contained' className='login-but' onClick={() => SubmitSignup(name, email, password)}>Sign Up</Button>
            </div>
            
            <div className="if_err">
              {err_visible ? <p>Invalid email or password</p> : null}
            </div>
        </div>
      </div>
    </>
  )
}