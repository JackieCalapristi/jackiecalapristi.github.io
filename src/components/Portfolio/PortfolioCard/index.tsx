import React from "react"

type portfolioCard = {
  slug: string,
  title: string,
  date: string,
  excerpt: string,
  imageUrl: string,
  subtitle: string,
  acquisition?: string
}

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const PortfolioCard = ({ slug, title, date, excerpt, subtitle, acquisition }: portfolioCard) => (
  <Card sx={{ minWidth: 275, maxWidth: 300  }}>
    <CardContent>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        {subtitle.toUpperCase()}
      </Typography>
      <Typography variant="h5" component="div">        
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5, fontSize: '14px' }} color="#666666">
        {date} {acquisition && (<>{bull}{' '}{acquisition} </> )}
      </Typography>
      <Typography variant="body2">
        {excerpt}
      </Typography>
    </CardContent>
    <CardActions>
      <a href={slug} rel="noopener noreferrer" target="_blank">
        <Button size="small">Learn More</Button>
      </a>
    </CardActions>
  </Card>
)

export default PortfolioCard