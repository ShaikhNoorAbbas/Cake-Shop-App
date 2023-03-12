import { Grid, Paper, Typography, Avatar, TextField, Box, InputAdornment, IconButton, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { signIn } from 'next-auth/react';
import style from '../styles/login.module.css';
//Login Components Startes From Here
const Login = ({ handleChange }) => {
    const schema = yup.object().shape({
        email: yup.string().email().required('Email is Required'),
        password: yup.string().min(6).required('Password is Required'),
    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [see, setSee] = useState(false);
    const handleSee = () => {
        setSee((prevState) => !prevState)
    }
    const linkStyle = {
        color: '#7B3F00',
        textDecoration: 'underline',
        cursor: 'pointer',
        marginLeft: '5px',
        fontWeight: "700",
    }
    const submitHandle = async (data) => {
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password
        })
        console.log(result);
        reset();
    };
    return (
        <Grid container >
            <Grid item sx={{ m: '0px auto' }}>
                <Paper elevation={20} sx={{ p: 3, height: '80vh', width: '340px' }} className={style.paper} >
                    <Avatar sx={{ color: 'white', bgcolor: "#7B3F00", m: '5px auto' }}><LockOutlinedIcon /></Avatar>
                    <Typography variant="h5" component="h2" align='center'>Sign In</Typography>
                    <Box component='form' noValidate sx={{ m: '5px auto' }} onSubmit={handleSubmit(submitHandle)} >
                        <TextField
                            error={errors.email ? true : false}
                            type="email"
                            variant="standard"
                            label="Email"
                            required
                            fullWidth
                            placeholder="Enter Your Email"
                            size='small'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <EmailSharpIcon />
                                    </InputAdornment>
                                )
                            }}
                            sx={{ mb: '20px' }}
                            {...register('email')}
                            helperText={errors.email && errors.email.message}
                        />
                        <TextField
                            error={errors.password ? true : false}
                            type={see ? "text" : "password"}
                            variant="standard"
                            required
                            label="Password"
                            fullWidth
                            placeholder="Enter Your password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton onClick={handleSee}>
                                            {see ? <VisibilitySharpIcon /> : <VisibilityOffSharpIcon />}</IconButton>
                                    </InputAdornment>
                                )
                            }}
                            sx={{ mb: '20px' }}
                            {...register('password')}
                            helperText={errors.password && errors.password.message}
                        />
                        <Button type="submit" variant='contained' elevation={10} fullWidth sx={{ mb: '10px' }}>Sign in</Button>
                        <Typography>
                            Create New account ?
                            <Link href="#" style={linkStyle} onClick={() => handleChange("event", "1")}>Sign Up</Link>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid >
    );
}

export default Login;