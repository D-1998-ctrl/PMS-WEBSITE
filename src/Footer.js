import React, { useState } from 'react';
import { Typography, Button,  Box, Container,} from '@mui/material';

import Grid from '@mui/material/Grid2';

import googleplay from '../src/imgs/google-play-white.svg';
import appStore from '../src/imgs/app-store-white.svg'




const Footer = () => {

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
    
      
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', mt: 3, py: 6, height: boxHeight, transition: 'height 0.3s ease' }}>
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
  </Box>
  );
};

export default Footer;
