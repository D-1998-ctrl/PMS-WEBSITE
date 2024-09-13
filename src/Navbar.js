
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Drawer, Box, Container, Card, CardContent, Avatar } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Grid from '@mui/material/Grid2';
import logo from '../src/imgs/logo.svg';
import Productdata from './Productdata';
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



  return (
    <Box className='navbar'>
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
                            <CardContent sx={{ height: '85px', width: '210px' }}>
                              <Box sx={{ display: 'flex', gap: 2 }}>
                                <Avatar sx={{ width: '30px', height: '30px' }}>
                                  {card.icon}
                                </Avatar>
                                <Box>
                                  <Typography component="div">
                                    <Link to="/product/overview" style={{ textDecoration: 'none', color: 'inherit' }}>
                                      <Typography component="div">{card.title}</Typography>
                                    </Link>
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
                                  
                                   <Link to="/Integrations/overview" style={{ textDecoration: 'none', color: 'inherit' }}>
                                      <Typography component="div">{card.title}</Typography>
                                    </Link>
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
                  component={Link}
                  to="/pricing"
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
                                <Link to="/Resources/upcoming-updates" style={{ textDecoration: 'none', color: 'inherit' }}>
                                      <Typography component="div">{card.title}</Typography>
                                    </Link>
                                  {/* <Typography component="div">
                                    {card.title}
                                  </Typography> */}
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
                                <Link to="/Aboutus/whyweexist" style={{ textDecoration: 'none', color: 'inherit' }}>
                                      <Typography component="div">{card.title}</Typography>
                                    </Link>
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
                {/* <Button sx={{ color: 'black', marginLeft: 'auto' }}>Log In</Button> */}
                <Button component={Link} to="/login" sx={{ color: 'black', marginLeft: 'auto' }}>
                  Log In
                </Button>

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
    </Box>
  )
}

export default Navbar





