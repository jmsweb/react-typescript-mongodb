import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home: React.FC = () => {
  document.title = 'Demo - Matchsquare Home';

  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        <Typography sx={{mt: 2}} variant='h3' gutterBottom>Jason's Demo</Typography>
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <table>
          <tbody>
            <tr>
              <td>Products</td>
              <td>Desc</td>
            </tr>
            <tr>
              <td>Parameters & Props</td>
              <td>Desc</td>
            </tr>
            <tr>
              <td>Login</td>
              <td>Desc</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default Home;