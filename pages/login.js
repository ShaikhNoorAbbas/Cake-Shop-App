import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import Login from '../components/Login';
import Register from '../components/Signup';
import Head from 'next/head';
import style from '../styles/login.module.css';
const Loginpage = () => {
    const [value, setValue] = useState('0')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <Head>
                <title>Form</title>
            </Head>
            <Box sx={{ maxWidth: '400px', m: '70px auto' }} className={style.head}>
                <TabContext value={value}>
                    <TabList onChange={handleChange} centered >
                        <Tab label='Sign in' value='0' sx={{ fontSize: '19px' }} />
                        <Tab label='Sign Up' sx={{ fontSize: '19px' }} value='1' />
                    </TabList>
                    <TabPanel value='0'><Login handleChange={handleChange} /> </TabPanel>
                    <TabPanel value='1'><Register handleChange={handleChange} /></TabPanel>
                </TabContext>
            </Box>
        </>
    )
}

export default Loginpage;