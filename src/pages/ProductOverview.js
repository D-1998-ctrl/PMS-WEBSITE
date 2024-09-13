import React from 'react';
import { Box, Typography, Button } from '@mui/material';
// import Grid from '@mui/material/Grid';
import Grid from '@mui/material/Grid2';
import ProductOverviewImg from '../imgs/product-overview.avif';
import img12 from '../imgs/img12.svg';
import img13 from '../imgs/img13.avif';

const ProductOverview = () => (
    <Box classname='productOverview_container'>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, }}>
                    <Box mt={3} m={2}>
                        <Typography variant='h3'>Product overview</Typography>
                        <Typography>Manage teams, clients, workflows — everything a tax, bookkeeping or accounting practice needs to work effectively. Improve productivity and reduce costs with automation, get paid on time with recurring invoices, collaborate with clients and teammates</Typography>
                    </Box>

                    <Box mt={3} m={2}><Button sx={{ mt: 4, borderRadius: 3 }} variant='contained' color='primary' >Request demo</Button></Box>

                </Grid>
                <Grid size={{ xs: 6, }}>
                    <Box mt={3} m={2}>
                        <img
                            src={ProductOverviewImg}
                            alt="Product Overview"
                            style={{ width: '100%', height: 'auto' }} // Adjust styles as needed
                        />
                    </Box>
                </Grid>

            </Grid>
        </Box>
        <Box
            sx={{
                position: 'relative',
                height: 'auto',
                width: '100%',
                backgroundColor: '#1976d3',
                borderRadius: '0 13%  0 25%',
                overflow: 'hidden',
                transform: 'skewY(0.7deg)',
                transformOrigin: 'top right',
            }}
        >

            <Grid container spacing={2}>
                <Grid size={{ xs: 6, }}>
                    <Box>
                        <Typography variant='h3' sx={{ color: '#fff', padding: '16px', mt: 16, fontWeight: 'bold' }}>
                            Put your brand front and center, on web and mobile
                        </Typography>
                    </Box>

                    <Typography variant='h6' sx={{ color: '#fff', padding: '16px', fontWeight: 'bold' }}>
                        provide a consistent and personalized client experience under your brand — on any device.
                        Fully custom-brand your portal, including the URL for your own domain, and the system emails your clients get.
                        Build your own website and let TaxDome host it for you for free! Our specialists can transfer your existing website to TaxDome at no extra cost.
                    </Typography>

                    <Box>
                        <Button sx={{ color: '#242424', backgroundColor: '#fff', fontWeight: 'bold', borderRadius: '15px', m: 2, mb: 20 }} variant='contained' color='primary' >Explore Website branding</Button>
                    </Box>

                </Grid>
                <Grid size={{ xs: 6, }}>
                    <Box sx={{ mt: 16 }}>
                        <img
                            src={img12}
                            alt="Product Overview"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{ ml: 30 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, }}>
                    <Box>
                        <Typography variant='h3' sx={{ padding: '16px', mt: 16, fontWeight: 'bold' }}>
                            Implementation & team training included
                        </Typography>

                    </Box>

                    <Typography variant='h6' sx={{ padding: '16px', }}>
                        Personalized support and assistance to ensure your firm's success. Learning a new software can be intimidating, which is why our team will create a customized plan based on your firm size, services, and goals with full access to:
                    </Typography>

                    <Box sx={{ flexGrow: 1, p: 2 }}>
                        <Grid container spacing={4} justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant='h7'>The knowledge base</Typography>

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='h7'>The knowledge base</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid size={{ xs: 6, }}>
                    <Box sx={{ mt: 10 }}>
                        <img
                            src={img13}
                            alt="Product Overview"
                            style={{ width: '65%', height: 'auto', }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
);

export default ProductOverview;
