import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ItemCard(props: any) {
  return (
    <Card sx={{ width: '300px', borderRadius: '8px', height: '370px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={props?.item?.imgsrc}
          alt={props?.item?.altTxt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props?.item?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props?.item?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}