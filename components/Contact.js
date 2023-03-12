import { TextField, Typography, Box, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const Contact = () => {
    return (
        <Box component="div" mb={7}>
            <Typography mb={2} variant='h4' fontFamily="san-serif">Contact Us - </Typography>
            <Box component="form">
                <TextField
                    variant='outlined'
                    label="First Name"
                    fullWidth
                    type="text"
                    sx={{ mb: 3 }}
                    size="medium"
                    placeholder="Enter Your First Name"
                />
                <TextField
                    variant="outlined"
                    label="Last Name"
                    fullWidth
                    type="text"
                    sx={{ mb: 3 }}
                    size="medium"
                    placeholder='Enter Your Last Name'
                />
                <TextField
                    variant="outlined"
                    label="Phone Number"
                    type="number"
                    fullWidth
                    sx={{ mb: 3 }}
                    size="medium"
                    placeholder='Enter Your Phone Number'
                />
                <TextField
                    multiline
                    label="Message"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 3 }}
                    size="medium"
                    helperText="Share Your Feedback"
                    placeholder='Share Your Feedback'
                />
                <Button variant="contained" sx={{ borderRadius: 5, fontFamily: "san-serif" }} endIcon={<SendIcon />}>Submit</Button>
            </Box>
        </Box>
    );
}

export default Contact;