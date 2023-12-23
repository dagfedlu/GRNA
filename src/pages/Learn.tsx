import { Box, Card, Grid, Toolbar, Typography } from '@mui/material'
import U from '../assets/U.jpg'
import ለ from '../assets/ለ.jpg'
import ሐ from '../assets/ሐ.jpg'
import መ from '../assets/መ.jpg'
import ሠ from '../assets/ሠ.jpg'
import ረ from '../assets/ረ.jpg'
import ሰ from '../assets/ሰ.jpg'
import ሸ from '../assets/ሸ.jpg'
import ቀ from '../assets/ቀ.jpg'
import በ from '../assets/በ.jpg'

const images = [
  { image: U, text: 'U(Ha)' },
  { image: ለ, text: 'ለ(Le)' },
  { image: ሐ, text: 'ሐ(Hameru Ha)' },
  { image: መ, text: 'መ(Me)' },
  { image: ሠ, text: 'ሠ(Se)' },
  { image: ረ, text: 'ረ(Re)' },
  { image: ሰ, text: 'ሰ(Se)' },
  { image: ሸ, text: 'ሸ(She)' },
  { image: ቀ, text: 'ቀ(Ke)' },
  { image: በ, text: 'በ(Be)' },
]

export default function Learn() {
  function ImageCard({ image, text }: { image: any; text: string }) {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
            height: { xs: 500, sm: 700 },
            position: 'relative',
          }}
        >
          <Box
            component='img'
            src={image}
            sx={{
              height: { xs: 500, sm: 700 },
              width: '100%',
              borderRadius: 3,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              bgcolor: 'black',
              opacity: 0.5,
              width: '100%',
              bottom: 0,
              borderBottomRightRadius: 3,
              borderBottomLeftRadius: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 30, sm: 40 },
                fontWeight: 'bold',
                color: 'white',
                px: 2,
                opacity: 1,
              }}
            >
              {text}
            </Typography>
          </Box>
        </Card>
      </Grid>
    )
  }

  return (
    <Box sx={{ p: { xs: 2, sm: 5 } }}>
      <Grid container spacing={3}>
        {images?.map((item) => (
          <ImageCard image={item?.image} text={item?.text} />
        ))}
      </Grid>
    </Box>
  )
}
