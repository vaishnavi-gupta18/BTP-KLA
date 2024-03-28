import React from 'react';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import ViewListIcon from '@mui/icons-material/ViewList';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AddIcon from '@mui/icons-material/Add';
import CircleIcon from '@mui/icons-material/Circle';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import styles from './sidebar.module.css';
import logo from '../assets/logo.svg';

const Sidebar = () => {
  const [form, setForm] = React.useState(false);
  const [access, setAccess] = React.useState(false);
  const [request, setRequest] = React.useState(false);

  return (
    <div className={styles.container}>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <HouseRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={() => setForm(!form)} sx={{ marginTop: "16px" }}>
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="Forms" />
          {form ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={form} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AddIcon sx={{ fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText primary="Create New" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CircleIcon sx={{ fontSize: 10 }} />
              </ListItemIcon>
              <ListItemText primary="To be filled" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CircleIcon sx={{ fontSize: 10 }} />
              </ListItemIcon>
              <ListItemText primary="To be approved" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CircleIcon sx={{ fontSize: 10 }} />
              </ListItemIcon>
              <ListItemText primary="Filled by me" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={() => setAccess(!access)} sx={{ marginTop: "16px" }}>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Access" />
          {access ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={access} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CircleIcon sx={{ fontSize: 10 }} />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CircleIcon sx={{ fontSize: 10 }} />
              </ListItemIcon>
              <ListItemText primary="Checkpoints" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={() => setRequest(!request)} sx={{ marginTop: "16px" }}>
          <ListItemIcon>
            <ChatOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Requests" />
          {request ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={request} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AddIcon sx={{ fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText primary="Create New" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CircleIcon sx={{ fontSize: 10 }} />
              </ListItemIcon>
              <ListItemText primary="Pending Requests" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CircleIcon sx={{ fontSize: 10 }} />
              </ListItemIcon>
              <ListItemText primary="Previous Requests" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <PersonRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItemButton>
        <ListItemButton sx={{ backgroundColor: "#C03221", color: "white", marginTop: "20px" }}>
          <ListItemIcon>
            <ExitToAppRoundedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItemButton>
      </List>
    </div >
  );
};

export default Sidebar;
