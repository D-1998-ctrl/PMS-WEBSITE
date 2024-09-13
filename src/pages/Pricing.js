
import React from 'react'
import { Box, Typography, Card, CardContent,Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import pricingImg from '../imgs/pricing.avif';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Pricing = () => {
  return (
    <Box className='Pricing' mb={250} style={{ marginTop: '5vh' }}>

      <Box sx={{ backgroundColor: '#004392', color: '#fff', height: '65vh', position: 'relative' }}>
        <Box sx={{ p: 6 }}>
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant="h3">
            One plan, everything included
          </Typography>
          <Typography variant='h6' sx={{ textAlign: 'center', fontSize: '20px' }}>
            <strong>With no complicated tiers, modules, or fees per contact, you can feel confident you made the right choice.</strong>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
          <Typography sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }} variant="h4">
            Save with multiple-year subscriptions
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>
            <strong>All plans billed upfront</strong>
          </Typography>
        </Box>

        {/* Cards Section */}
        <>
          <Box mt={6}>
            <Grid container spacing={2} justifyContent="center">
              {/* Card 1 */}
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card
                  sx={{
                    position: 'relative',
                    top: '-10px',
                    height: '35vh',
                    boxShadow: 3,
                  }}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '80%',
                    }}
                  >
                    <Typography variant="h6">3-year subscription</Typography>
                    <Typography variant="body2">$700/yr per user</Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Card 2 */}
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card
                  sx={{
                    position: 'relative',
                    top: '-10px',
                    height: '35vh',
                    boxShadow: 3,
                  }}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '80%',
                    }}
                  >
                    <Typography variant="h6">2-year subscription</Typography>
                    <Typography variant="body2">$750/yr per user</Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Card 3 */}
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card
                  sx={{
                    position: 'relative',
                    top: '-10px',
                    height: '35vh',
                    boxShadow: 3,
                  }}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '80%',
                    }}
                  >
                    <Typography variant="h6">1-year subscription</Typography>
                    <Typography variant="body2">$800/yr per user</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>


          <Box >
            <Grid container justifyContent="center" alignItems="center" >
              <Grid item>
                <Box color={'#4872a0'} backgroundColor={'#e8f1fb'} padding={'10px 50px 10px'} borderRadius={'0 0 32px 32px'} width={'200px'}>
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                      <Typography fontSize={'17px'}>Seasonal staff $85 per user per month, billed monthly</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>

            <Box color={'#000'} display={'flex'} alignItems={'center'} justifyContent={'center'} mt={1}>
              <Typography variant='h5'>TaxDome will revolutionize your practice. Let us show you how.</Typography>
            </Box>

            <Box m={2}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button sx={{ borderRadius: 3 }} variant='contained' color='primary'>
                    Request demo
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ backgroundColor: "#004392" }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6, }}>
                  <Box sx={{ mt: 10, ml: 6 }} m={2}>
                    <Typography variant='h2'>Offering the highest security standards</Typography>
                    <Typography>At TaxDome, we’re committed to providing best-in-class services, including enterprise-grade security measures. TaxDome is SOC 2 compliant — we handle sensitive data with care, protecting your firm from fraud and breaches.</Typography>
                  </Box>



                </Grid>
                <Grid size={{ xs: 6, }}>
                  <Box mt={3} m={2}>
                    <img
                      src={pricingImg}
                      alt="Product Overview"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Box>
                </Grid>

              </Grid>
            </Box>

            <Box>
              <Box color={'#000'} m={2}>
                <Typography variant='h3'>Frequently asked questions</Typography>
              </Box>
              <Box className='pricing-accordion'>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#24c875', fontSize: '35px' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography><strong>Why should I consider a yearly subscription over a monthly plan?</strong></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Customers often find several advantages when opting for a yearly pricing plan as compared to a monthly plan:

                      The price won’t change for you. Even if TaxDome’s pricing increases while you’re using your subscription for one to three years, you won’t be affected.
                      You’ll save money. TaxDome offers a discounted rate for annual subscriptions, meaning the total cost for the year is less than paying month-to-month. This is a substantial saving over time.
                      Budgeting will be easier and more convenient. With a yearly plan, you have to think about the payment only once a year,
                      which can simplify budgeting, especially if your budget is fixed.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#24c875', fontSize: '35px' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography><strong>Can I purchase licenses with different durations for my employees?</strong></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Can I purchase licenses with different durations for my employees?
                      Sure! If your primary subscription is for 3 years, you can buy additional licenses for 3 years at a price of $700 per year, for 2 years at $750 per year, and for 1 year for $800. Monthly subscriptions for seasonal employees are available for $85 per month, per license.

                      If your primary subscription is for 2 years, you can buy additional licenses for 2 years at a price of $750 per year and for 1 year at a price of $800. Monthly subscriptions for seasonal employees cost $85 per month, per license.

                      If your primary subscription is for 1 year, duration you can buy additional annual licenses and monthly subscriptions for seasonal employees at a price of $85 per month.
                    </Typography>
                  </AccordionDetails>
                </Accordion>



                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#24c875', fontSize: '35px' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography><strong>Can I buy a 1-year subscription for $800, then upgrade to a multi-year subscription and still get the discounted price?</strong></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      If you buy a 1-year plan and want to upgrade to a 2- or 3-year subscription, you can do so within 30 days. Please reach out to support to change your plan.
                    </Typography>
                  </AccordionDetails>
                </Accordion>


                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#24c875', fontSize: '35px' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography><strong>Can multi-year licenses be transferred from one employee to another?</strong></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes!
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Box>




          </Box>
        </>
      </Box>
    </Box>
  )
}
export default Pricing;
