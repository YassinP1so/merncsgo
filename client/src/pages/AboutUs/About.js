import React from 'react';
import "./AboutUs.css"
import { Box, Slider } from '@mui/material';
const About = () => {
  
  return (
    
        <section>
          <div className='row'>
            <div className='column'>
                <div className='about-img'></div>
            </div>
            <div className='column'>
                

                <div className='tab-content'>
                
                {/* about content */}
                
                  
                  <h2>My Story</h2>
                  <p style={{color : "black"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <div className='skills-row'>
                    <div className='skills-column'>
                        <div className='progress-wrap'>
                            <h4 style={{marginLeft : "-80px" , fontFamily : "monospace" , fontSize : "20px" }}>Entry</h4>
                            <Box width={300}>
                          <Slider
                        size="big"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        color="success"
                        />
                        </Box>
                        </div>
                        
                    </div>
                    <div className='skills-column'>
                        <div className='progress-wrap'>
                            <h4 style={{marginLeft : "-80px" , fontFamily : "monospace" , fontSize : "20px"}}>Awper</h4>
                            <Box width={300}>
                          <Slider
                        size="big"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        color="success"
                        />
                        </Box>
                        </div>
                        
                    </div>
                    <div className='skills-column'>
                        <div className='progress-wrap'>
                            <h4 style={{marginLeft : "-80px" , fontFamily : "monospace" , fontSize : "20px"}}>Support</h4>
                            <Box width={300}>
                          <Slider
                        size="big"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        color="success"
                        />
                        </Box>
                        </div>
                        
                    </div>
                    <div className='skills-column'>
                        <div className='progress-wrap'>
                            <h4 style={{marginLeft : "-80px" , fontFamily : "monospace" , fontSize : "20px"}}>Lurker</h4>
                            <Box width={300}>
                          <Slider
                        size="big"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        color="success"
                        />
                        </Box>
                        </div>
                        
                    </div>
                  </div>
                </div>
                
                
                <div className='content'>
                
                
                
                </div>

                </div>

            </div>
          
        </section>
    
  );
}

export default About;
