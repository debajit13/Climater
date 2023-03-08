import { Card, CardContent, TextField } from '@mui/material';
import Button from '@mui/material-next/Button';

const WeatherForm = () => {
  return (
    <Card
      sx={{
        backgroundColor: '#FFBFA9',
        boxShadow: 'none',
        width: '80vw',
        marginBottom: '14px',
        color: '#fff',
        borderRadius: '24px',
        padding: '56px',
      }}
    >
      <CardContent>
        <TextField
          id='outlined-basic'
          label='Enter location here...'
          color='success'
          sx={{
            width: '100%',
            marginBottom: '14px',
          }}
        />

        <Button
          color='secondary'
          sx={{ marginLeft: '45%' }}
          variant='contained'
        >
          Search
        </Button>
      </CardContent>
    </Card>
  );
};

export default WeatherForm;
