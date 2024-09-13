// import React from 'react'
// import { Box, Typography,Button, Container, Paper } from '@mui/material';
// // import Grid from '@mui/material/Grid2';

// const WhyweExist = () => {
//   return (
//     <Container>
//           <Box 
//                sx={{
//                 position: 'relative',
//                 height:'60vh',
//                 // height: 'auto',
//                 width: '100%',
//                 backgroundColor: '#1976D3',
//                 borderRadius: '80px', // The border-radius is now set to 10% for curved edges
//                 overflow: 'hidden',
//                 transformOrigin: 'top right',
//                 marginTop: '66px', // Ensure marginTop is applied here
//               }}
//             >
        
//               <Box sx={{textAlign:'center'}}>
//                   <Typography variant='h3' sx={{ color: '#fff', padding: '16px',  fontWeight: 'bold' }}>
//                      About Us
//                   </Typography>
//               </Box>
//               <Box m={3}> 
//             <Paper>
//                 <Box>
//                     <Typography variant='h2'> Who we are and why we exist</Typography>
//                 </Box>

//                       <Box>
//                         <Typography variant='h5'>
//                               The TaxDome story is one about the transformative power of technology to a tax business.


//                               About 8 years ago, my brother and I built a custom software system for a tax practice, and watched it grow from 10 to over 70 staff in as much time. The firm growth trajectory was amazing — the firm grew immensely while becoming more agile, more efficient, more organized and ultimately, more profitable. Its clients were more satisfied, reporting that the new interface made the company more trustworthy and pleasant to work with.


//                               We realized we had a “secret sauce” to building operational success, and if we could make our proprietary software available to other firms, they would stand to benefit as well. And that’s why we launched TaxDome in March 2017.


//                               TaxDome is a technology company born out of deep understanding of Tax and Accounting business needs. Our mission (and passion) is improving your relationship with the work you do and the people you work with, making the day-to-day easier and your bottom line better.


//                               We exist to service companies of every size and shape — from sole proprietor to 20+ staff. Leveraging cloud-based software to automate menial tasks and free up your valuable time to focus on what matters most. Centralizing and streamlining communications with clients, storing important documents securely and invoicing with ease. That’s TaxDome.


//                               Our goal is to make your team focused, productive, organized, and most importantly, happy. TaxDome is the most intuitive, all-in-one cloud-based solution for tax practice management. Best-in-class software that is accessible no matter how large or small your tax business is.


//                               Let’s take your tax practice to a better place with TaxDome, together.
//                         </Typography>
                         
//                       </Box>
//             </Paper>
//           </Box>
              


//           </Box>

        

//     </Container>
//   )
// }

// export default WhyweExist


import React from 'react'
import { Box, Typography, Container, Paper } from '@mui/material';

const WhyweExist = () => {
  return (
    <Container>
      <Box
        sx={{
          position: 'relative',
          height: '60vh', 
          width: '100%',
          backgroundColor: '#1976D3',
          borderRadius: '80px', 
          overflow: 'hidden',
          marginTop: '66px', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      
        <Box
          sx={{
            textAlign: 'center',
            position: 'absolute',
            top: '30px', 
            width: '100%',
          }}
        >
          <Typography variant='h3' sx={{ color: '#fff', fontWeight: 'bold' }}>
            About Us
          </Typography>
        </Box>

        
        <Paper
          sx={{
            width: '75%', 
            position: 'relative',
            top: '250px', 
            padding: '24px',
            borderRadius: '16px',
            zIndex: 1, 
          }}
         
        >
          <Typography variant='h5' sx={{ color: '#4CAF50', fontWeight: 'bold', mb: 2 }}>
            A letter from the founder
          </Typography>
          <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2 }}>
            Who we are and why we exist
          </Typography>
          <Typography variant='body1'>
            The TaxDome story is one about the transformative power of technology to a tax business.
            <br /><br />
            About 8 years ago, my brother and I built a custom software system for a tax practice, and watched it grow from 10 to over 70 staff in as much time. The firm growth trajectory was amazing — the firm grew immensely while becoming more agile, more efficient, more organized and ultimately, more profitable. Its clients were more satisfied, reporting that the new interface made the company more trustworthy and pleasant to work with.
            <br /><br />
            We realized we had a “secret sauce” to building operational success, and if we could make our proprietary software available to other firms, they would stand to benefit as well. And that’s why we launched TaxDome in March 2017.
            <br /><br />
            TaxDome is a technology company born out of deep understanding of Tax and Accounting business needs. Our mission (and passion) is improving your relationship with the work you do and the people you work with, making the day-to-day easier and your bottom line better.
            <br /><br />
            We exist to service companies of every size and shape — from sole proprietor to 20+ staff. Leveraging cloud-based software to automate menial tasks and free up your valuable time to focus on what matters most.
            <br /><br />
            Our goal is to make your team focused, productive, organized, and most importantly, happy.
            <br /><br />
            Let’s take your tax practice to a better place with TaxDome, together.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default WhyweExist;

