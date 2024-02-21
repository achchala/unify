import React from 'react';
import { List, ListItem, ListItemText, Typography, ListItemAvatar, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

function ViewMatches() {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}?subject=Let's be study buddies!`;
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <List>
        <ListItem button onClick={() => handleEmailClick('sophia1@gmail.com')}>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h6">
                Sophia Rodriguez
              </Typography>
            }
            secondary={
              <>
                <Typography variant="subtitle1">
                  Program: Computer Science
                </Typography>
                <Typography variant="subtitle2">
                  sophia1@gmail.com
                </Typography>
              </>
            }
          />
        </ListItem>
        <ListItem button onClick={() => handleEmailClick('jane@uwaterloo.ca')}>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h6">
                Jane Smith
              </Typography>
            }
            secondary={
              <>
                <Typography variant="subtitle1">
                  Program: Management Engineering
                </Typography>
                <Typography variant="subtitle2">
                  jane@uwaterloo.ca
                </Typography>
              </>
            }
          />
        </ListItem>
        <ListItem button onClick={() => handleEmailClick('mia@uwaterloo.ca')}>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h6">
                Mia Nguyen
              </Typography>
            }
            secondary={
              <>
                <Typography variant="subtitle1">
                  Program: Systems Design Engineering
                </Typography>
                <Typography variant="subtitle2">
                  mia@uwaterloo.ca
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </div>
  );
}

export default ViewMatches;
