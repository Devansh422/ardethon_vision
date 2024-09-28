import { Fragment, useState } from 'react';

import { INavMenuItemProps } from './MenuItem.interface';
import Image from 'next/image';
import { NavMenuPopover } from './NavMenuPopover';
import { StyledButton } from '../atoms';

export const NavMenuItem = ({ caption, popoverChildren }: INavMenuItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <StyledButton
        variant="text"
        className='text-black px-4 py-1 rounded-full bg-bgbase hover:bg-level4 hover:text-bgbase'
        onClick={handleClick}
        aria-describedby={'mark'}
      >
        {caption}
      </StyledButton>
      <NavMenuPopover isOpen={!!anchorEl} anchorElement={anchorEl} id="mark" onClose={handleClose}>
        {popoverChildren}
      </NavMenuPopover>
    </Fragment>
  );
};
