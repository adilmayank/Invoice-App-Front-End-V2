import { Box, Typography } from '@mui/material'

const MainContainer = () => {
  return (
    <Box
      borderRadius={'10px 0 0 10px'}
      boxShadow={'0px 0px 10px 0px #8b8b8b8a inset'}
      padding={'1rem 0 1rem 1rem'}
      sx={{
        minHeight: '95%',
        maxHeight: '95%',
      }}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          minHeight: '100%',
          maxHeight: '100%',
          overflow: 'auto',
        }}
      >
        <Typography variant="h1" color={'skyblue'}>
          Test Area
        </Typography>
      </Box>
    </Box>
  )
}

export default MainContainer
