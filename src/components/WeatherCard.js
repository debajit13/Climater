import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: '#8D7B68',
        boxShadow: 'none',
        color: '#fff',
        borderRadius: '24px',
        padding: '56px',
      }}
    >
      <CardContent>
        <Typography variant='h2'>Today 28°C</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
