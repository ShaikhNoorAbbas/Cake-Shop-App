import { Typography, Grid, Paper, Avatar, Box, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

async function createUser(name, email, password) {
    const response = await fetch("/api/auth/signup", {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Something Went Wrong');
    }
    return data;
}

//This is Where Component Started
const Signup = ({ handleChange }) => {
    const schema = yup.object().shape({
        name: yup.string().required('Please Enter Your Name').min(2),
        email: yup.string().email().required("Please Enter Your Email"),
        password: yup.string().min(6).required("Enter password Above 6"),
        confirmPassword: yup.string().required("Please Enter Confirm Password").oneOf([yup.ref('password'), null], 'Password Must Match')
    });
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [see1, setSee1] = useState(false);
    const [see2, setSee2] = useState(false);
    const handleSee1 = () => {
        setSee1((prevState) => !prevState);
    }
    const handleSee2 = () => {
        setSee2((prevState) => !prevState);
    }
    const linkStyle = {
        color: '#7B3F00',
        textDecoration: 'underline',
        fontWeight: "bold",
    }
    const submitHandle = async (data) => {
        console.log(`Name: ${data.name}`)
        console.log(`Email: ${data.email}`)
        console.log(`Password: ${data.password}`)
        console.log(`Confirm Password: ${data.confirmPassword}`)
        try {
            const result = await createUser(data.name, data.email, data.password);
            console.log(result);
            console.log(result.message)
        } catch (error) {
            console.log(error)
        }
        reset();
    }
    return (
        <Grid container >
            <Grid item sx={{ m: '0px auto' }}>
                <Paper elevation={20} sx={{ m: "2px auto", p: 3, height: '90vh', width: '340px' }}>
                    <Avatar sx={{ bgcolor: '#7B3F00', color: 'white', m: '5px auto' }}><ControlPointSharpIcon /></Avatar>
                    <Typography variant='h5' align='center'>
                        Sign up
                    </Typography>
                    <Box component="form" sx={{ m: '5px auto' }} noValidate onSubmit={handleSubmit(submitHandle)}>
                        <TextField
                            error={errors.name ? true : false}
                            type='text'
                            variant='standard'
                            label="Fullname"
                            placeholder="Enter Your Name"
                            required
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <AccountCircleSharpIcon />
                                    </InputAdornment>
                                )
                            }}
                            sx={{ mb: '8px' }}
                            {...register('name')}
                            helperText={errors.name && `${errors.name.message}`}
                        />
                        <TextField
                            error={errors.email ? true : false}
                            type="email"
                            variant='standard'
                            label="Email"
                            required
                            fullWidth
                            placeholder='Enter your email'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <EmailSharpIcon />
                                    </InputAdornment>
                                )
                            }}
                            sx={{ mb: '8px' }}
                            {...register('email')}
                            helperText={errors.email && `${errors.email.message}`}
                        />
                        <TextField
                            error={errors.password ? true : false}
                            type={see1 ? "text" : "password"}
                            variant='standard'
                            label="Password"
                            fullWidth
                            required
                            placeholder='Enter password'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton onClick={handleSee1}>
                                            {see1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            sx={{ mb: '8px' }}
                            {...register("password")}
                            helperText={errors.password && `${errors.password.message}`}
                        />
                        <TextField
                            error={errors.confirmPassword ? true : false}
                            type={see2 ? "text" : "password"}
                            variant='standard'
                            label="Confirm password"
                            fullWidth
                            placeholder='Enter Confirm Password'
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton onClick={handleSee2}>
                                            {see2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            sx={{ mb: '20px' }}
                            {...register('confirmPassword')}
                            helperText={errors.confirmPassword && errors.confirmPassword.message}
                        />
                        <Button type="submit" variant='contained' fullWidth sx={{ mb: '10px' }}>Sign Up</Button>
                        <Typography>
                            Already have an account?
                            <Link href="#" style={linkStyle} onClick={() => handleChange("event", "0")}>Sign In</Link>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid >
    );
}

export default Signup;