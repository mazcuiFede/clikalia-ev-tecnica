import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ image, name, description }) {
  const router = useRouter();
  return (
    <Card>
      <CardMedia
        component="img"
        height="250"
        width="250"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ')}
        </Typography>

        {Object.entries(description).map(([key, value]) => (
          <div>
            <b>{key}</b>: {value}
          </div>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => router.back()} variant="outlined">
          Volver
        </Button>
      </CardActions>
    </Card>
  );
}

BasicCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.shape.isRequired,
};
