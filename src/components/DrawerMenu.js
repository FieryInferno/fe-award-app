import React, {useMemo, useState} from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import {logout} from '../slices/auth.slice';
import {useDispatch} from 'react-redux';
import Menu from './Menu';
import {useNavigate} from 'react-router-dom';

import list from '../assets/list.svg';
import award from '../assets/award.svg';

/* eslint-disable max-len */
const DrawerMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menu = useMemo(() => [
    {
      onClick: (e) => setState(false),
      name: 'Home',
    },
    {name: 'Cards'},
    {name: 'Profile'},
    {
      onClick: () => {
        dispatch(logout())
            .unwrap()
            .then(() => navigate('/login'));
      },
      name: 'Logout',
    },
  ], []);

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <img src={list} className="w-4 cursor-pointer" onClick={(toggleDrawer(true))} />
      <Drawer
        anchor={'left'}
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{width: 250}}
          role="presentation"
        >
          <div>
            <img className="mx-auto mt-8 w-48" src={award} alt="logo" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl">
              <strong>Awards Menu</strong>
            </h1>
          </div>
          <div>
            <aside className="w-64" aria-label="Sidebar">
              <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded">
                <ul className="space-y-2">
                  {menu.map((menu, key) => <Menu key={key} {...menu} />)}
                </ul>
              </div>
            </aside>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
