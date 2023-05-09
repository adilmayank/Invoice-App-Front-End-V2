import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'

const Sidebar = () => {
  return (
    <Box marginTop={'10px'} width={'70%'}>
      <nav>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Quotations</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Products</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Customers</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default Sidebar
