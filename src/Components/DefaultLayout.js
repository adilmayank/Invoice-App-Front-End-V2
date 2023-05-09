import { Container, Stack } from '@mui/material'
import AppBar from './AppBar'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const DefaultLayout = () => {
  return (
    <Container maxWidth={'100%'} sx={{ padding: '0 !important' }}>
      <AppBar />
      <Stack
        height={'600px'}
        maxHeight={'600px'}
        direction={'row'}
        display={'grid'}
        gridTemplateColumns={'1fr 4fr'}
      >
        <Sidebar />
        <MainContainer />
      </Stack>
    </Container>
  )
}

export default DefaultLayout
