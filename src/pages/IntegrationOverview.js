import React from 'react';
import { Box, Typography,Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import IntegrationOverviewImg from '../imgs/integrationoverviw.svg';
import img16 from '../imgs/img16.avif';
import img17 from '../imgs/img17.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

const IntegrationOverview = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box sx={{ backgroundColor: '#f3f8fd' }} classnasme='IntegrationOverview'>
      <Box sx={{ flexGrow: 1, mt: 8, }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, }}>
            <Box sx={{ mt: 8, ml: 2 }} >
              <Typography sx={{ fontWeight: 'bold', fontSize: '66px' }} variant='h1'>Integrations overview</Typography>
              <Typography sx={{ fontSize: '20px' }} variant='h7'>Automate your workflow to run your firm more efficiently. Connect TaxDome with your favorite tax programs, schedulers, payment providers and more!</Typography>
            </Box>

            <Box mt={3} m={2}><Button sx={{ mt: 4, borderRadius: 3 }} variant='contained' color='primary' >Request demo</Button></Box>

          </Grid>
          <Grid size={{ xs: 6, }}>
            <Box mt={3} m={2}>
              <img
                src={IntegrationOverviewImg}
                alt="Product Overview"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>

        </Grid>
      </Box>

      <Box>
        <Box
          sx={{
            position: 'relative',
            height: '75vh',
            width: '90%',
            backgroundColor: '#1976d3',
            borderRadius: '0 70px  80px 0',
            overflow: 'hidden',
          }}
        >

          <Grid container spacing={5}>
            <Grid size={{ xs: 6, }}>
              <Box sx={{ marginTop: '80px', ml: 10 }}>
                <Typography variant='h7' sx={{ color: '#fff', fontWeight: 'bold', fontSize: '19px' }}>
                  provide a " I love that this app has the request feature that I can use for general communication with a client throughout tax season. Also the email as tasks feature! I don’t have to search through my emails to find client stuff anymore — it makes my work life so much more streamlined. "consistent and personalized client experience under your brand — on any device.
                  Fully custom-brand your portal, including the URL for your own domain, and the system emails your clients get.
                  Build your own website and let TaxDome host it for you for free! Our specialists can transfer your existing website to TaxDome at no extra cost.
                </Typography>
                <Typography
                  sx={{
                    color: '#fff',
                    padding: '16px',
                    fontWeight: 'bold',
                    display: 'flex',
                    flexDirection: "column",
                    lineHeight: 1.5
                  }}
                >
                  Joe E.
                  <Box style={{ fontWeight: 'normal' }}>Enrolled agent</Box>
                </Typography>
              </Box>




            </Grid>
            <Grid size={{ xs: 6, }}>
              <Box>
                <img
                  src={img16}
                  alt="Product Overview"
                  style={{ width: '55%', height: 'auto', transform: 'translateX(105px)', marginTop: '40px' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Box>



      <Box>



        <Grid container spacing={2}>
          <Grid size={{ xs: 6, }}>
            <Box>
              <Typography variant='h3' sx={{ padding: '16px', mt: 16, fontWeight: 'bold' }}>
                Zapier
              </Typography>

            </Box>

            <Typography variant='h6' sx={{ padding: '16px', }}>
              Connect TaxDome to 2000+ apps such as cloud accounting solutions, sales and marketing tools and more with Zapier. Automate your practice:


              Add prospects to TaxDome when they book a call with you, sync data between spreadsheets, or even update your mailing list without lifting a finger.
            </Typography>

            <Box>
              <Button sx={{ fontWeight: 'bold', borderRadius: '15px', m: 2, mb: 20 }} variant='contained' color='primary' >More about Zapier integration</Button>
            </Box>

          </Grid>
          <Grid size={{ xs: 6, }}>
            <Box sx={{ mt: 16 }}>
              <img
                src={img17}
                alt="Product Overview"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box ml={3}>
          <Typography variant='h3' >Frequently asked questions</Typography>
        </Box>
        <Box sx={{ mt: 4, margin: '20px' }} classnasme='Accordion'>
          <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={[
              expanded
                ? {
                  '& .MuiAccordion-region': {
                    height: 'auto',
                  },
                  '& .MuiAccordionDetails-root': {
                    display: 'block',
                  },
                }
                : {
                  '& .MuiAccordion-region': {
                    height: 0,
                  },
                  '& .MuiAccordionDetails-root': {
                    display: 'none',
                  },
                },
            ]}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#24c875', fontSize: '35px' }} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>Does TaxDome integrate with QuickBooks Online?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                Yes, TaxDome has a native integration with QuickBooks Online.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#24c875', fontSize: '35px' }} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>Do you integrate with tax programs?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                TaxDome integrates with all tax programs through our desktop drive.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>




    </Box>
  )
}

export default IntegrationOverview
