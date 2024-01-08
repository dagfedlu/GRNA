// import {
// 	Box,
// 	Toolbar,
// 	Typography,
// 	Container,
// 	CssBaseline,
// 	Grid,
// 	Button,
// } from "@mui/material"
// import * as React from "react"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from "react-responsive-carousel"

// function Home() {
// 	return (
// 		<>
// 			<React.Fragment>
// 				<Container maxWidth="sm">
// 					<Box>
// 						<Grid container spacing={3}>
// 							{/* header */}
// 							<Grid xs={12} md={4}>
// 								<Toolbar />
// 								<Toolbar />
// 								<Typography sx={{ fontSize: 40, textAlign: "center" }}>
// 									Learn from anywhere.
// 								</Typography>
// 								<Typography sx={{ fontSize: 40, textAlign: "center" }}>
// 									At anytime.
// 								</Typography>
// 							</Grid>
// 							{/* carousel */}
// 							<Grid xs={12} md={8} sx={{ padding: "30px" }}>
// 								<Toolbar />
// 								<Toolbar />
// 								<Carousel
// 									autoPlay={true}
// 									dynamicHeight={true}
// 									infiniteLoop={true}
// 									interval={8000}
// 									showArrows={false}
// 									showStatus={false}
// 									showIndicators={false}
// 									showThumbs={false}
// 								>
// 									<div>
// 										<img src="./images/home-img-1.jfif" />
// 									</div>
// 									<div>
// 										<img src="./images/home-img-2.jfif" />
// 									</div>
// 									<div>
// 										<img src="./images/home-img-3.jfif" />
// 									</div>
// 								</Carousel>
// 								<Toolbar />
// 							</Grid>
// 							{/* buttons */}
// 							<Grid xs={12} md={6}>
// 								<div style={{ alignItems: "center", paddingLeft: "25px" }}>
// 									<Typography>Begin working on your gestures</Typography>
// 									<Button
// 										sx={{
// 											variant: "outlined",
// 											backgroundColor: "#3559E0",
// 											color: "#000",
// 											size: "large",
// 											margin: "20px",
// 										}}
// 										href="/hgr"
// 									>
// 										Start Now
// 									</Button>
// 								</div>

// 								<Toolbar />
// 							</Grid>
// 							<Grid xs={12} md={6} sx={{ alignItems: "center" }}>
// 								<div style={{ alignItems: "center", paddingLeft: "25px" }}>
// 									<Typography>Get familiar with EthSL alphabets</Typography>
// 									<Button
// 										sx={{
// 											variant: "outlined",
// 											backgroundColor: "#3559E0",
// 											color: "#000",
// 											size: "large",
// 											margin: "20px",
// 										}}
// 										href="/learn"
// 									>
// 										Learners Hub
// 									</Button>
// 									<Toolbar />
// 								</div>
// 							</Grid>
// 						</Grid>
// 					</Box>
// 				</Container>
// 			</React.Fragment>
// 		</>
// 	)
// }
// export default Home

import { Box, Typography, Grid, Button } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <Box>
      <Box>
        <Box sx={{ height: 'calc(100vh - 96px)' }}>
          <Grid container sx={{ height: '100%' }}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: { md: 'center' },
                  px: { xs: 2, sm: 5 },
                }}
              >
                <Box
                  sx={{
                    px: { xs: 0, sm: 0, md: 5 },
                    my: { xs: 3, md: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 30, sm: 50, md: 65 },
                      fontWeight: 'bold',
                      background:
                        'var(--newww, linear-gradient(90deg, #63B4FF 0.21%, #002977 99.79%))',
                      backgroundClip: 'text',
                      '-webkit-background-clip': 'text',
                      '-webkit-text-fill-color': 'transparent',
                    }}
                  >
                    Learn Sign Language
                  </Typography>
                  <Typography
                    variant='h4'
                    sx={{
                      fontWeight: 'bold',
                      color: '#002977',
                      mb: 5,
                      fontSize: { xs: 18, sm: 22, md: 30 },
                    }}
                  >
                    From anywhere at any time
                  </Typography>
                  <Box sx={{ my: 3 }}>
                    <Typography
                      variant='h5'
                      sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: 16, sm: 20, md: 27 },
                      }}
                    >
                      You can use our organized learning Hub
                    </Typography>
                    <Box
                      sx={{
                        display: { xs: 'flex', sm: 'block' },
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant='contained'
                        onClick={() => navigate('/learn')}
                        sx={{
                          width: 250,
                          py: 2,
                          borderRadius: 10,
                          my: 1,
                          background:
                            'var(--newww, linear-gradient(90deg, #63B4FF 0.21%, #002977 99.79%))',
                        }}
                      >
                        Learn
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ my: 3 }}>
                    <Typography
                      variant='h5'
                      sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: 16, sm: 20, md: 27 },
                      }}
                    >
                      Or you can use our built-in Hand Gesture Recognizer
                    </Typography>
                    <Box
                      sx={{
                        display: { xs: 'flex', sm: 'block' },
                        justifyContent: 'center',
                      }}
                    >
                      <Button
                        variant='contained'
                        onClick={() => navigate('/hgr')}
                        sx={{
                          width: 250,
                          py: 2,
                          borderRadius: 10,
                          my: 1,
                          background:
                            'var(--newww, linear-gradient(90deg, #63B4FF 0.21%, #002977 99.79%))',
                        }}
                      >
                        Get Started
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ width: { md: '80%' } }}>
                  <Carousel
                    autoPlay={true}
                    dynamicHeight={true}
                    infiniteLoop={true}
                    interval={5000}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                  >
                    <Box
                      sx={{
                        width: { sm: '100%' },
                      }}
                    >
                      <Box
                        component='img'
                        src='./images/home-img-1.jfif'
                        sx={{ borderRadius: { xs: 3, sm: 5, md: 20 } }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: { sm: '100%' },
                      }}
                    >
                      <Box
                        component='img'
                        src='./images/home-img-2.jfif'
                        sx={{ borderRadius: { xs: 3, sm: 5, md: 20 } }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: { sm: '100%' },
                      }}
                    >
                      <Box
                        component='img'
                        src='./images/home-img-3.jfif'
                        sx={{ borderRadius: { xs: 3, sm: 5, md: 20 } }}
                      />
                    </Box>
                  </Carousel>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
export default Home
