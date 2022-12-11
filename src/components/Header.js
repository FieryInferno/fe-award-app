import React from 'react';
import DrawerMenu from './DrawerMenu';
import DrawerFilter from './DrawerFilter';

/* eslint-disable max-len */
const Header = (props) => (
  <header className="bg-white h-16 p-4">
    <div className="flex justify-between">
      <div>
        <DrawerMenu />
      </div>
      <div>
        <strong>Awards</strong>
      </div>
      <div>
        <DrawerFilter {...props} />
      </div>
    </div>
  </header>
);

export default React.memo(Header);
