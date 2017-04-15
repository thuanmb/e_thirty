import React, { PropTypes } from 'react';
import Gravatar from 'react-gravatar';
import { ButtonToolbar, Dropdown, MenuItem } from 'react-bootstrap';
import { history } from 'CorePath/store';

import './avatar-style';

const Avatar = ({ signOutHandler }) => (
  <ButtonToolbar>
    <Dropdown pullRight id="gravatar-dropdown" className="action-dropdown-btn">
      <Dropdown.Toggle noCaret>
        <Gravatar email="buimthuan@gmail.com" rating="pg" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="super-colors">
        <MenuItem eventKey="1" onClick={signOutHandler}>
          Logout
        </MenuItem>

        <MenuItem eventKey="2" onSelect={() => history.push('/bookmarks')}>
          My favourites
        </MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  </ButtonToolbar>
);

Avatar.propTypes = {
  signOutHandler: PropTypes.func,
};

export default Avatar;
