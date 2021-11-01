import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon  from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button, Dialog } from '@material-ui/core';
import Tweetbox from '../Feed/Tweetbox';

function Sidebar() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = e => {
      setOpen(true);
    }
  
    const handleClose = e => {
      setOpen(false);
    }
    return (
      <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />
  
        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />
  
        {/* Button -> Tweet */}
        <Button
          onClick={handleClickOpen}
          variant="outlined"
          className="sidebar__tweet"
          fullWidth
        >
          Tweet
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <Tweetbox />
        </Dialog>
      </div>
    );
  }

export default Sidebar;
