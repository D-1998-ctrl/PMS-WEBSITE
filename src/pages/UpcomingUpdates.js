import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ux1 from '../imgs/ux1.avif';
import ux2 from '../imgs/ux2.avif';
import ux3 from '../imgs/ux3.avif';
import ux4 from '../imgs/ux4.avif';
import ux5 from '../imgs/ux5.avif'



const UpcomingUpdates = () => {
    return (
        <Container sx={{ mt: 10 }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"

            >
                <Typography variant='h2'>Upcoming interface improvements</Typography>
                <Typography variant='h6'>Discover a wave of usability changes designed to enhance your TaxDome experience</Typography>

                <Box mt={3} m={2}><Button sx={{ mt: 4, borderRadius: 3 }} variant='contained' color='primary' >Request demo</Button></Box>
            </Box>
          <Box> 
            <Box sx={{ flexGrow: 1, mt: 28, }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, }}>
                        <Box sx={{ mt: 8, ml: 2 }} >
                            <Typography sx={{ fontWeight: 'bold', }} variant='h2'>Improved menu design</Typography>
                            <Typography sx={{ fontSize: '20px' }} variant='h7'>We’ve revamped the left sidebar menu and header for a more intuitive and efficient navigation experience :

                                Easily locate core features with a new drop-down design

                                Enjoy a fixed header on all pages, providing easy access to a search bar and +New button

                                When the menu is unpinned, simply hover over the icons to view the full menu breakdown

                                Experience improved visibility thanks to a redesigned color scheme</Typography>
                        </Box>



                    </Grid>
                    <Grid size={{ xs: 6, }}>
                        <Box mt={3} m={2}>
                            <img
                                src={ux1}
                                alt="Product Overview"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1, mt: 8, }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, }}>
                        <Box sx={{ mt: 8, ml: 2 }} >
                            <Typography sx={{ fontWeight: 'bold',  }} variant='h2'>Easy-to-access profile settings</Typography>
                            <Typography sx={{ fontSize: '20px' }} variant='h7'>We’ve moved the user profile to the upper-right corner for easier access. Now, with just a few clicks, you can manage your profile settings or log out.</Typography>
                        </Box>



                    </Grid>
                    <Grid size={{ xs: 6, }}>
                        <Box mt={3} m={2}>
                            <img
                                src={ux2}
                                alt="Product Overview"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1, mt: 8, }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, }}>
                        <Box sx={{ mt: 8, ml: 2 }} >
                            <Typography sx={{ fontWeight: 'bold',  }} variant='h2'>Revamped job sidebar</Typography>
                            <Typography sx={{ fontSize: '20px' }} variant='h7'>Coming next – a wider job sidebar, allowing you to view important job-related info and access linked items in one place. No scrolling or searching needed.</Typography>
                        </Box>



                    </Grid>
                    <Grid size={{ xs: 6, }}>
                        <Box mt={3} m={2}>
                            <img
                                src={ux3}
                                alt="Product Overview"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
           

            <Box sx={{ flexGrow: 1, mt: 8, }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, }}>
                        <Box sx={{ mt: 8, ml: 2 }} >
                            <Typography sx={{ fontWeight: 'bold',  }} variant='h2'>Easier time tracking</Typography>
                            <Typography sx={{ fontSize: '20px' }} variant='h7'>Enjoy more granular time tracking on individual tasks and jobs, and access timers more quickly through the task and job sidebars.</Typography>
                        </Box>



                    </Grid>
                    <Grid size={{ xs: 6, }}>
                        <Box mt={3} m={2}>
                            <img
                                src={ux4}
                                alt="Product Overview"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1, mt: 8, }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, }}>
                        <Box sx={{ mt: 8, ml: 2 }} >
                            <Typography sx={{ fontWeight: 'bold',  }} variant='h2'>Customizable tables</Typography>
                            <Typography sx={{ fontSize: '20px' }} variant='h7'>Tables are now easier to navigate! The header row and first column stay pinned while scrolling. Plus, you can now customize your view by hiding, reordering, and resizing columns.</Typography>
                        </Box>



                    </Grid>
                    <Grid size={{ xs: 6, }}>
                        <Box mt={3} m={2}>
                            <img
                                src={ux5}
                                alt="Product Overview"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            </Box>

        </Container>
    )
}

export default UpcomingUpdates
