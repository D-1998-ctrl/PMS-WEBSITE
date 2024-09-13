import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { Box, Button, Checkbox, FormControlLabel, InputAdornment, InputLabel, Select, MenuItem, OutlinedInput, TextField, Typography } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/');
    };

    return (
        <Box className='loginpage'>
            <Box className='logininfo'>

                <h1 className='wbtext'>Welcome Back</h1>
                <Typography variant='p' sx={{ color: "white", mx: 8, textAlign: 'center', fontSize: '20px', fontWeight: '500' }}>
                    "Welcome to 'SNP Tax & Financials', where tax management meets simplicity. Our advanced software streamlines tax processes for individuals, businesses, and professionals, ensuring accuracy and efficiency. Experience a new era of financial ease with SNP Tax & Financials."
                </Typography>
                <Typography variant='p' className='fontchange'>
                    Please Login to access your account
                </Typography>

            </Box>

            <Box className='logininput'>
                <form>
                    <Box className='loginalign'>
                        <Typography variant='h1' sx={{
                            color: "black", fontSize: "35px",
                            fontWeight: '700', mb: '50px', m: 2, textAlign: 'center'
                        }}>Login Account</Typography>


                        <Box >
                            <InputLabel htmlFor="outlined-required">Email</InputLabel>
                            <TextField
                                placeholder="Email"
                                sx={{
                                    width: '100%', bgcolor: 'white', borderRadius: '10px', '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                        '& fieldset': {
                                            borderRadius: '10px',
                                        },
                                    },
                                }}
                                id="outlined-required"
                            />
                        </Box>
                        <br />

                        <Box>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                sx={{
                                    width: '100%', bgcolor: 'white', borderRadius: '10px', '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                        '& fieldset': {
                                            borderRadius: '10px',
                                        },
                                    },
                                }}
                                id="outlined-adornment-password"
                                type='password'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <VisibilityOff />
                                    </InputAdornment>
                                }
                                placeholder="Password"
                            />
                        </Box>
                        <Box mt={2}>
                            <Link to='/passwordreset'>Forgot Password</Link>
                        </Box>


                        <Box mt={2}>
                            <InputLabel id="time-select-label">Stay Signed In For</InputLabel>
                            <Select
                                sx={{
                                    width: '100%', bgcolor: 'white', borderRadius: '10px', '& .MuiOutlinedInput-root': {
                                        borderRadius: '10px',
                                        '& fieldset': {
                                            borderRadius: '10px',
                                        },
                                    },
                                }}
                                labelId="time-select-label"
                                id="time-select"
                            >
                                <MenuItem value={0} disabled>Select Time Interval</MenuItem>
                                <MenuItem value={5}>5 Seconds</MenuItem>
                                <MenuItem value={'8h'}>8 Hours</MenuItem>
                                <MenuItem value={'10d'}>10 Days</MenuItem>
                                <MenuItem value={'30d'}>30 Days</MenuItem>
                            </Select>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            textAlign: 'center'
                        }}>
                            <Button onClick={handleLogin} variant="contained" sx={{
                                borderColor: 'primary.main',
                                borderWidth: '2px', borderStyle: 'solid', fontSize: '15px', fontWeight: '600', borderRadius: '100px', mt: '15px',
                                ':hover': {
                                    backgroundColor: 'transparent',
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    boxShadow: 'none',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                },
                            }}>Login</Button>

                            <p className='donthaveacc'>Don't have an account?<Link to='/signup'>Sign Up</Link></p>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            mt: '12px'
                        }}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label={
                                    <span className='termncond'>
                                        "Agree to
                                        <Link to="/termsncond">
                                            Terms and Conditions"
                                        </Link>
                                    </span>
                                }
                            />
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}

export default Login;


