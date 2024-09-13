import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Paper, Button, Drawer, Box, Container, Card, CardContent, Avatar } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import img1 from '../src/imgs/img1.avif';
import companyimg1 from '../src/imgs/companyimg1.svg';
import companyimg from '../src/imgs/companyimg.svg';
import companyimg2 from '../src/imgs/companyimg2.svg';
import companyimg3 from '../src/imgs/companyimg3.svg';
import companyimg4 from '../src/imgs/companyimg4.svg';
import companyimg5 from '../src/imgs/companyimg5.svg';
import companyimg6 from '../src/imgs/companyimg6.svg';
import companyimg7 from '../src/imgs/comapanyimg7.svg';
import companyimg8 from '../src/imgs/comapanyimg8.svg';
import companyimg9 from '../src/imgs/companyimg9.svg';
import companyimg10 from '../src/imgs/companyimg10.svg';
import Grid from '@mui/material/Grid2';
import logo from '../src/imgs/logo.svg';
import Productdata from './Productdata';
import googleplay from '../src/imgs/google-play-white.svg';
import appStore from '../src/imgs/app-store-white.svg'
import img11 from '../src/imgs/img11.png';
import ComputerIcon from '@mui/icons-material/Computer';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TI1 from '../src/imgs/TI1.avif';
import TI2 from '../src/imgs/TI2.avif';
import TI3 from '../src/imgs/TI3.avif';
import TI4 from '../src/imgs/TI4.avif';
import TI5 from '../src/imgs/TI5.avif';
import TI6 from '../src/imgs/TI6.avif';
import TI7 from '../src/imgs/TI7.avif';
import TI8 from '../src/imgs/TI8.avif';
import TI9 from '../src/imgs/TI9.avif';
import TI10 from '../src/imgs/TI10.avif';
import TI11 from '../src/imgs/TI11.avif';
import IntegrationData from './Integrationdata';
import Resourcesdata from '../src/Resourcesdata';
import Aboutusdata from './Aboutusdata';
const Navbar = () => {
  const [drawerState, setDrawerState] = useState({
    product: false,
    integration: false,
    pricing: false,
    resources: false,
    aboutUs: false,
  });
  const toggleDrawer = (drawerName, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, [drawerName]: open });
  };
  const renderDrawer = (drawerName, content) => (
    <Drawer
      anchor="top"
      open={drawerState[drawerName]}
      onClose={toggleDrawer(drawerName, false)}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        sx: {
          marginTop: '50px',
          paddingLeft: '20px',
          paddingTop: '15px',
          paddingBottom: '15px',

        },
      }}
    >
      <Box
        sx={{
          width: 'auto',
          padding: 2,
          backgroundColor: 'white',
        }}
        role="presentation"
        onClick={toggleDrawer(drawerName, false)}
        onKeyDown={toggleDrawer(drawerName, false)}
      >
        <Typography>
          {content}
        </Typography>
      </Box>
    </Drawer>
  );
  const [showMore, setShowMore] = useState(false);
  const [boxHeight, setBoxHeight] = useState('auto');
  const [compareMore, setCompareMore] = useState(false);
  const [companyMore, setCompanyMore] = useState(false);
  const [integrationMore, setIntegrationMore] = useState(false);
  const [policiesMore, setPoliciesMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
    setBoxHeight(showMore ? 'auto' : '750px');
  };

  const handleCompareToggle = () => {
    setCompareMore(!compareMore);
    setBoxHeight(compareMore ? 'auto' : '750px');
  };

  const handleCompanyToggle = () => {
    setCompanyMore(!companyMore);
    setBoxHeight(companyMore ? 'auto' : '750px');
  };

  const handleIntegrationToggle = () => {
    setIntegrationMore(!integrationMore);
    setBoxHeight(integrationMore ? 'auto' : '750px');
  };

  const handlePoliciesToggle = () => {
    setPoliciesMore(!policiesMore);
    setBoxHeight(policiesMore ? 'auto' : '750px');
  };

  const images = [TI1, TI2, TI3, TI4, TI5, TI6, TI7, TI8, TI9, TI10, TI11];

  return (
    <Box className='snp-singpageWeb'>
      {/* <Box className='navbar'>
        <AppBar position="fixed" color='#fff' elevation={0} >
          <Container maxWidth="xl" sx={{ boxShadow: 1, background: '#fff' }}>
            <Toolbar disableGutters>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, }}>
                <Box className='img1' >
                  <img
                    src={logo}
                    alt=""
                    style={{ width: '100%', height: 'auto', maxWidth: '1200px' }}
                  />
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' }, }}>
                  <Button
                    aria-controls="product-menu"
                    aria-haspopup="true"
                    onClick={toggleDrawer('product', true)}
                    sx={{ color: 'black' }}
                  >
                    Product
                    {drawerState.product ? (
                      <KeyboardArrowUpIcon sx={{ marginLeft: 1 }} />
                    ) : (
                      <KeyboardArrowDownIcon sx={{ marginLeft: 1 }} />
                    )}
                  </Button>
                  {renderDrawer(
                    'product',
                    // <Box >

                    //   <Grid container spacing={2}>
                    //     {Productdata.map((card, index) => (
                    //       <Grid item xs={12} sm={6} md={3} key={index}>
                    //         <Card sx={{ boxShadow: 3, cursor: 'pointer' }} className='cards-cards'>
                    //           <CardContent sx={{ height: '80px', width: '210px', }}>
                    //             <Box sx={{ display: 'flex', gap: 2 }}>
                    //               <Avatar sx={{ width: '30px', height: '30px' }}>
                    //                 {card.icon}
                    //               </Avatar>
                    //               <Box>
                    //                 <Typography component="div">
                    //                   {card.title}
                    //                 </Typography>
                    //                 <Typography variant="body2" color="text.secondary">
                    //                   {card.description}
                    //                 </Typography>
                    //               </Box>
                    //             </Box>
                    //           </CardContent>
                    //         </Card>
                    //       </Grid>
                    //     ))}
                    //   </Grid>

                    // </Box>

                    <Box>
                      <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                      >
                        {Productdata.map((card, index) => (
                          <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card sx={{ boxShadow: 3, cursor: 'pointer' }} className='cards-cards'>
                              <CardContent sx={{ height: '95px', width: '215px' }}>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                  <Avatar sx={{ width: '30px', height: '30px' }}>
                                    {card.icon}
                                  </Avatar>
                                  <Box>
                                    <Typography component="div">
                                      {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      {card.description}
                                    </Typography>
                                  </Box>
                                </Box>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}

                  <Button
                    aria-controls="integration-menu"
                    aria-haspopup="true"
                    onClick={toggleDrawer('integration', true)}
                    sx={{ color: 'black' }}
                  >
                    Integration
                    {drawerState.integration ? (
                      <KeyboardArrowUpIcon sx={{ marginLeft: 1 }} />
                    ) : (
                      <KeyboardArrowDownIcon sx={{ marginLeft: 1 }} />
                    )}
                  </Button>
                  {renderDrawer(
                    'integration',
                    <Box>
                    <Grid
                      container
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {IntegrationData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                          <Card sx={{ boxShadow: 3, cursor: 'pointer' }} className='cards-cards'>
                            <CardContent sx={{ height: '95px', width: '215px' }}>
                              <Box sx={{ display: 'flex', gap: 2 }}>
                                <Avatar sx={{ width: '30px', height: '30px' }}>
                                  {card.icon}
                                </Avatar>
                                <Box>
                                  <Typography component="div">
                                    {card.title}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  )}

                  <Button
                    aria-controls="pricing-menu"
                    aria-haspopup="true"
                    sx={{ color: 'black' }}
                  >
                    Pricing
                  </Button>

                  <Button
                    aria-controls="resources-menu"
                    aria-haspopup="true"
                    onClick={toggleDrawer('resources', true)}
                    sx={{ color: 'black' }}
                  >
                    Resources
                    {drawerState.resources ? (
                      <KeyboardArrowUpIcon sx={{ marginLeft: 1 }} />
                    ) : (
                      <KeyboardArrowDownIcon sx={{ marginLeft: 1 }} />
                    )}
                  </Button>
                  {renderDrawer(
                    'resources',
                    <Box>
                    <Grid
                      container
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {Resourcesdata.map((card, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                          <Card sx={{ boxShadow: 3, cursor: 'pointer' }} className='cards-cards'>
                            <CardContent sx={{ height: '100px', width: '210px' }}>
                              <Box sx={{ display: 'flex', gap: 2 }}>
                                <Avatar sx={{ width: '30px', height: '30px' }}>
                                  {card.icon}
                                </Avatar>
                                <Box>
                                  <Typography component="div">
                                    {card.title}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  )}

                  <Button
                    aria-controls="aboutus-menu"
                    aria-haspopup="true"
                    onClick={toggleDrawer('aboutUs', true)}
                    sx={{ color: 'black' }}
                  >
                    About Us
                    {drawerState.aboutUs ? (
                      <KeyboardArrowUpIcon sx={{ marginLeft: 1 }} />
                    ) : (
                      <KeyboardArrowDownIcon sx={{ marginLeft: 1 }} />
                    )}
                  </Button>
                  {renderDrawer(
                    'aboutUs',
                    <Box>
                    <Grid
                      container
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {Aboutusdata.map((card, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                          <Card sx={{ boxShadow: 3, cursor: 'pointer' }} className='cards-cards'>
                            <CardContent sx={{ height: '95px', width: '215px' }}>
                              <Box sx={{ display: 'flex', gap: 2 }}>
                                <Avatar sx={{ width: '30px', height: '30px' }}>
                                  {card.icon}
                                </Avatar>
                                <Box>
                                  <Typography component="div">
                                    {card.title}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  )}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button sx={{ color: 'black', marginLeft: 'auto' }}>Log In</Button>
                  <Button variant="outlined" sx={{ marginLeft: 2 }}>
                    Start Free Trial
                  </Button>
                  <Button variant="contained" sx={{ marginLeft: 2 }}>
                    Get a Demo
                  </Button>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box> */}
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


          <Box sx={{ mt: 50, padding: 2, width: '80%', margin: '0 auto' ,mr:12}}>
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
  <Grid container spacing={12} sx={{  p: 3, justifyContent: 'center', alignItems: 'center' }}>
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

      {/* <Box sx={{ backgroundColor: '#f5f5f5', mt: 3, py: 6, height: boxHeight, transition: 'height 0.3s ease' }}>
        <Container maxWidth="xl">
          <Grid container spacing={7} sx={{ ml: 7 }}>
            <Grid item xs={12} sm={4} >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Product
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Overview</Typography>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Workflow Automation</Typography>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Client Portal</Typography>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>CRM</Typography>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Document Management</Typography>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Email Sync</Typography>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Time & Billing</Typography>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Website & Branding</Typography>
                {showMore && (
                  <>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Electronic Signature</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Secure Messages</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Tax Organizers</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Mobile App</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Desktop App</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Team Management</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Inbox+</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>PDF Editor</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Apps</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Firm dashboard</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>SMS</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Audit Trail</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Client requests</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Global communication</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Capacity planning</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TaxDome AI</Typography>
                  </>
                )}

              </Box>
              <Button onClick={handleToggle} sx={{ mt: 2 }}>
                {showMore ? 'Hide' : 'More'}
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Compare
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Master Table</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs Canopy</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs Karbon</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs Jetpack</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs Asana</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs Senta</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs ShareFile</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs GetNetSet</Typography>

              {compareMore && (
                <>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs SmartVault</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs Adobe Sign</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs DocuSign</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TD vs ClickUp</Typography>

                </>
              )}

              <Button onClick={handleCompareToggle} sx={{ mt: 2 }}>
                {compareMore ? 'Hide' : 'More'}
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Company
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>About Us</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Client testimonials</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>ROI Calculator</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Pricing</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TaxDome Academy</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Updates</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Status</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Contact</Typography>

              {companyMore && (
                <>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Press</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Careers</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Sitemap</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Education</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Webinars</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Bootcamp</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Academy</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Certification</Typography>
                </>
              )}

              <Button onClick={handleCompanyToggle} sx={{ mt: 2 }}>
                {companyMore ? 'Hide' : 'More'}
              </Button>
            </Grid>


            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Integrations
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Overview</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Zapier</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Tax Programs</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TaxAct</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>CCH Axcess Tax</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Drake</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>ProConnect</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Lacerte</Typography>

              {integrationMore && (
                <>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>ProSeries</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TaxSlayer</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Verito</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Schedulers</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Payment Processors</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>CPACharge</Typography>
                  <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Companies House</Typography>

                </>
              )}

              <Button onClick={handleIntegrationToggle} sx={{ mt: 2 }}>
                {integrationMore ? 'Hide' : 'More'}
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Partnerships
              </Typography>
              <Box>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Referral Program</Typography>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Partner Program</Typography>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Become a Consultant</Typography>
              </Box>

              <Typography variant="h6" sx={{ mb: 2, mt: 5 }}>
                Policies
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Terms of Service</Typography>
                <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Privacy Policy</Typography>

                {policiesMore && (
                  <>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Security Policy</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>General Data Protection Regulation</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Cookie Policy</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>List of Sub-processors</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Accessibility Statement</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>TaxDome Security</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Security Review</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Refund Policy</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Spam Guidelines</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Bug Bounty</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>SMS Policy</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Referral Program Terms</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>GLBA Compliance</Typography>
                    <Typography variant="body1" sx={{ mb: 1, fontSize: '13px' }}>Imprint</Typography>
                  </>
                )}

                <Button onClick={handlePoliciesToggle} sx={{ mt: 2 }}>
                  {policiesMore ? 'Hide' : 'More'}
                </Button>

              </Box>

            </Grid>

            <Grid item xs={12} sm={4}>
              <Box>
                <Box> <Button sx={{ ml: 6, borderRadius: '15px' }} variant='contained' color='primary' >Request demo</Button></Box>
              </Box>

              <Box sx={{ m: 6, mt: 3 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Client mobile app</Typography>
                <Box sx={{ display: "flex", gap: 3, mt: 2 }}>
                  <img src={googleplay} alt='goggle store' />
                  <img src={appStore} alt='appstore' />
                </Box>
              </Box>

              <Box sx={{ m: 6, mt: 1 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Firm mobile app</Typography>
                <Box sx={{ display: "flex", gap: 3, mt: 2 }}>
                  <img src={googleplay} alt='goggle store' />
                  <img src={appStore} alt='appstore' />
                </Box>
              </Box>

            </Grid>

          </Grid>
          <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 4 }}>
            © 2024 Your Company Name. All rights reserved.
          </Typography>
        </Container>
      </Box> */}
    </Box>
  );
};
export default Navbar;



