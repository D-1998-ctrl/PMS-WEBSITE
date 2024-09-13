import React from 'react';
import { Typography, Paper, Button, Box, Card, CardContent, } from '@mui/material';

import img1 from '../imgs/img1.avif';
import companyimg1 from '../imgs/companyimg1.svg';
import companyimg from '../imgs/companyimg.svg';
import companyimg2 from '../imgs/companyimg2.svg';
import companyimg3 from '../imgs/companyimg3.svg';
import companyimg4 from '../imgs/companyimg4.svg';
import companyimg5 from '../imgs/companyimg5.svg';
import companyimg6 from '../imgs/companyimg6.svg';
import companyimg7 from '../imgs/comapanyimg7.svg';
import companyimg8 from '../imgs/comapanyimg8.svg';
import companyimg9 from '../imgs/companyimg9.svg';
import companyimg10 from '../imgs/companyimg10.svg';
import Grid from '@mui/material/Grid2';



import img11 from '../imgs/img11.png';
import ComputerIcon from '@mui/icons-material/Computer';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TI1 from '../imgs/TI1.avif';
import TI2 from '../imgs/TI2.avif';
import TI3 from '../imgs/TI3.avif';
import TI4 from '../imgs/TI4.avif';
import TI5 from '../imgs/TI5.avif';
import TI6 from '../imgs/TI6.avif';
import TI7 from '../imgs/TI7.avif';
import TI8 from '../imgs/TI8.avif';
import TI9 from '../imgs/TI9.avif';
import TI10 from '../imgs/TI10.avif';
import TI11 from '../imgs/TI11.avif';

const Home = () => {


    const images = [TI1, TI2, TI3, TI4, TI5, TI6, TI7, TI8, TI9, TI10, TI11];
    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', mt: 10 }}>
                <Typography sx={{ fontWeight: 'bold' }} variant='h2'>
                    The most powerful platform to manage teams, clients, projects
                </Typography>
            </Box>

            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant='h5'>Practice management software for tax, bookkeeping and accounting firms</Typography>
            </Box>


            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                <Button sx={{ mt: 4 }} variant='contained' color='primary' >Request demo</Button>

                <Button sx={{ mt: 4 }} variant="outlined"   >Start free trial</Button>
            </Box>

            <Box className='img1' sx={{ textAlign: 'center', mt: 4 }}>
                <img
                    src={img1}
                    alt=""
                    style={{ width: '100%', height: 'auto', maxWidth: '1200px' }}
                />
            </Box>

            <Box className='firmscontainer'>

                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant='h4'>Industry leader trusted by 10,000+ firms</Typography>
                </Box>

                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Typography
                        sx={{ fontWeight: 'bold' }}
                        variant='h6'
                    >
                        TaxDome has 6,200+ reviews on{' '}
                        <span
                            style={{ color: '#1976d3', cursor: 'pointer' }}
                            onClick={() => window.open('https://www.capterra.com/', '_blank')}
                        >
                            Capterra
                        </span>,{' '}
                        <span
                            style={{ color: '#1976d3', cursor: 'pointer' }}
                            onClick={() => window.open('https://www.capterra.com/p/186749/TaxDome/', '_blank')}
                        >
                            G2
                        </span> and{' '}
                        <span
                            style={{ color: '#1976d3', cursor: 'pointer' }}
                            onClick={() => window.open('https://www.getapp.com/', '_blank')}
                        >
                            GetApp
                        </span> with an average score of 4.7/5.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 4 }}>
                    {[
                        companyimg1, companyimg, companyimg2, companyimg3, companyimg9, companyimg10,
                        companyimg4, companyimg5, companyimg6, companyimg7, companyimg8
                    ].map((imgSrc, index) => (
                        <Box key={index} sx={{ flex: '1 0 calc(100% / 6 - 16px)', maxWidth: 'calc(100% / 6 - 16px)', overflow: 'hidden', width: 'auto' }}>
                            <img src={imgSrc} alt={`company-image-${index + 1}`} style={{ width: '60%', height: 'auto', margin: '0 auto', display: 'block' }} />
                        </Box>
                    ))}
                </Box>
            </Box>



            <Box className='firmsizes' sx={{ background: "#003260", color: '#fff', }}>
                <Box> <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }} variant='h4'>Customizable for all firm sizes and types</Typography></Box>


                <Box
                    sx={{

                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',


                    }}
                >
                    <Grid container spacing={2} style={{ padding: '20px' }} justifyContent="center">

                        <Grid item xs={12} sm={6} md={4} ml={8}>
                            <Card className="hoverCard" style={{ height: '230px', width: '380px', backgroundColor: '#083F6E', color: 'white', boxShadow: 'none', border: '1px solid #335a7e', position: 'relative' }}>
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <ComputerIcon style={{ fontSize: 50, color: '#83C4E1' }} />
                                    </div>
                                    <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
                                        Sole practitioner
                                    </Typography>
                                    <Typography variant="body2" style={{ textAlign: 'center' }}>
                                        Store all data related to every client in a centralized hub and eliminate the need for back-and-forth emails. Automate all of your tasks and maximize efficiency of your client interactions. All your clients, tasks, docs, invoices, in one place.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="hoverCard" style={{ height: '230px', width: '380px', backgroundColor: '#083F6E', color: 'white', boxShadow: 'none', border: '1px solid #335a7e', position: 'relative' }}>
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <BusinessIcon style={{ fontSize: 50, color: '#83C4E1' }} />
                                    </div>
                                    <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
                                        Mid-sized & large firms
                                    </Typography>
                                    <Typography variant="body2" style={{ textAlign: 'center' }}>
                                        Enable your staff to be more productive and scale efficiently. Build repeatable, reliable workflows across multiple service offerings and teams. Outstanding client experience to build your brand and increase retention.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>


                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="hoverCard" style={{ height: '230px', width: '380px', backgroundColor: '#083F6E', color: 'white', boxShadow: 'none', border: '1px solid #335a7e', position: 'relative' }}>
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <AccountBalanceIcon style={{ fontSize: 50, color: '#83C4E1' }} />
                                    </div>
                                    <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
                                        Enterprise
                                    </Typography>
                                    <Typography variant="body2" style={{ textAlign: 'center' }}>
                                        Visibility and control over all processes. Implement foolproof SOPs to scale and enable your teams to succeed. Outstanding client experience to build your brand and increase retention.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} ml={8}>
                            <Card className="hoverCard" style={{ height: '210px', width: '380px', backgroundColor: '#083F6E', color: 'white', boxShadow: 'none', border: '1px solid #335a7e', position: 'relative' }}>
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <LocalAtmIcon style={{ fontSize: 50, color: '#83C4E1' }} />
                                    </div>
                                    <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
                                        Accountants
                                    </Typography>
                                    <Typography variant="body2" style={{ textAlign: 'center' }}>
                                        Automate document request processes, leverage pre-made templates and set up recurring work. Utilize time and billing, WIP reports and more.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="hoverCard" style={{ height: '210px', width: '380px', backgroundColor: '#083F6E', color: 'white', boxShadow: 'none', border: '1px solid #335a7e', position: 'relative' }}>
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <AttachMoneyIcon style={{ fontSize: 50, color: '#83C4E1' }} />
                                    </div>
                                    <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
                                        Bookkeepers
                                    </Typography>
                                    <Typography variant="body2" style={{ textAlign: 'center' }}>
                                        Use ready templates or create your unique customized workflows. Ensure all routine tasks are done on schedule, so you have more time to help your clients.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="hoverCard" style={{ height: '210px', width: '380px', backgroundColor: '#083F6E', color: 'white', boxShadow: 'none', border: '1px solid #335a7e', position: 'relative' }}>
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <LocalAtmIcon style={{ fontSize: 50, color: '#83C4E1' }} />
                                    </div>
                                    <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
                                        Tax preparers
                                    </Typography>
                                    <Typography variant="body2" style={{ textAlign: 'center' }}>
                                        From intake to e-signature and everything in between. Send engagement letters, automate client communication, download IRS transcripts, get paid and much more.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Repeat for other Grid items... */}

                        <style>
                            {`
.hoverCard {
  position: relative;
  overflow: hidden;
}
.hoverCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3));
  transition: left 0.9s ease-in-out;
}
.hoverCard:hover::before {
  left: 100%;
}
`}
                        </style>

                    </Grid>
                </Box>


                <Box sx={{ mt: 50, padding: 2, width: '80%', margin: '0 auto', mr: 12 }}>
                    <Paper>

                        <Box >
                            <Grid container rowSpacing={1} >
                                <Grid size={6}>
                                    <Box sx={{ mt: 4, m: 2, }}>
                                        <Typography sx={{ color: '#24c875', fontWeight: 'bold' }} variant='h8'>Case study: setting the stage for growth</Typography>
                                    </Box>

                                    <Box sx={{ m: 2 }}>
                                        <Typography sx={{ fontWeight: 220 }} variant='h3'>How TaxDome helped a 40-person accounting firm become more efficient and scalable</Typography>
                                    </Box>

                                    <Box sx={{ m: 2 }}>
                                        <Typography variant='h8'>
                                            <strong>Firm</strong>: Accurant LLC
                                        </Typography>
                                    </Box>

                                    <Box sx={{ m: 2 }}>
                                        <Typography variant='h8'>
                                            <strong>Services</strong>: Аccounting, bookkeeping, tax preparation
                                        </Typography>
                                    </Box>


                                    <Box>
                                        <Button sx={{ ml: 6, borderRadius: '15px', mt: 2 }} variant='contained' color='primary' >Get the free e-book</Button>
                                    </Box>

                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ m: 2, mt: 2 }}>
                                            <Typography sx={{ color: '#24c875', fontWeight: 'bold' }} variant='h3'>9,000+</Typography>
                                            <Typography sx={{ color: '#737c8c' }} variant='h5'>Clients</Typography>
                                        </Box>

                                        <Box sx={{ m: 2, mt: 2 }}>
                                            <Typography sx={{ color: '#24c875', fontWeight: 'bold' }} variant='h3'>40+</Typography>
                                            <Typography sx={{ color: '#737c8c' }} variant='h5'>team members</Typography>
                                        </Box>

                                        <Box sx={{ m: 2, mt: 2 }}>
                                            <Typography sx={{ color: '#24c875', fontWeight: 'bold' }} variant='h3'>6</Typography>
                                            <Typography sx={{ color: '#737c8c' }} variant='h5'>offices</Typography>
                                        </Box>
                                    </Box>

                                </Grid>
                                <Grid size={6}>
                                    <Box >
                                        <img
                                            src={img11}
                                            alt=''
                                            style={{ height: '500px', width: '500px', }}
                                        />
                                    </Box>
                                </Grid>

                            </Grid>
                        </Box>
                    </Paper>
                </Box>

            </Box>
            <Box className='tax-integration' sx={{ textAlign: 'center' }}>
                <Box sx={{ m: 2, mt: 10, textAlign: 'center' }}>
                    <Typography variant='h3'>
                        Integrations and partnerships with leading tax & accounting organizations
                    </Typography>
                </Box>

                <Box className="tax-integration-imgs" sx={{ flexGrow: 1, m: 4, display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={12} sx={{ p: 3, justifyContent: 'center', alignItems: 'center' }}>
                        {images.map((image, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Box
                                    component="img"
                                    src={image}
                                    alt={`TI${index + 1}`}
                                    sx={{ width: '100%', height: 'auto' }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

        </Box>
    );
};

export default Home;
