import React, { PropTypes } from 'react';
import Gravatar from 'react-gravatar';
import { ButtonToolbar, Dropdown, MenuItem } from 'react-bootstrap';
import { history } from 'CorePath/store';

import './avatar-style';

const Avatar = ({ isAdmin, email, signOutHandler }) => (
  <ButtonToolbar>
    <Dropdown pullRight id="gravatar-dropdown" className="action-dropdown-btn">
      <Dropdown.Toggle noCaret>
        <Gravatar email={email} rating="pg" default="retro" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="super-colors">
        <MenuItem eventKey="2" onSelect={() => history.push('/bookmarks')}>
          My favourites
        </MenuItem>

        {isAdmin &&
          <MenuItem divider />
        }

        {isAdmin &&
          <MenuItem eventKey="3" href="articles/new">
            Create article
          </MenuItem>
        }
        <MenuItem divider />
        <MenuItem eventKey="1" onClick={signOutHandler}>
          Logout
        </MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  </ButtonToolbar>
);

Avatar.propTypes = {
  signOutHandler: PropTypes.func,
  isAdmin: PropTypes.bool,
  email: PropTypes.string,
};

export default Avatar;
