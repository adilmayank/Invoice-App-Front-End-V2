import { Box } from '@mui/material'

const Logo = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      marginRight={'10px'}
    >
      <img width={"50px"}
        src="https://img.icons8.com/ios/50/000000/old-vmware-logo.png"
        alt="app logo"
      />
    </Box>
  )
}

export default Logo
