import { Stack, Typography, Button } from '@mui/material'
import Logo from '../Commons/AppLogo'

const AppBar = () => {
  return (
    <Stack
      direction={'row'}
      margin={'1rem 1.5rem'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Stack direction={'row'}>
        <Logo />
        <Typography display={'flex'} alignItems={'center'} fontSize={'20px'}>
          INVOICE APP
        </Typography>
      </Stack>
      <Button
        variant="outlined"
        size="small"
        sx={{ lineHeight: '25px' }}
        onClick={() => alert('User logged in!')}
      >
        Login
      </Button>
    </Stack>
  )
}

export default AppBar
