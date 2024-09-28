import { Button } from '@mui/material';

export const OutlinedButton = ({
  onClick,
  children,
  disabled = false,
}: {
  onClick: () => void;
  children: React.ReactNode | string;
  disabled?: boolean;
}) => (
  <Button onClick={onClick} className="text-black py-2 px-4 rounded-full hover:bg-level4 hover:text-bgbase bg-bgbase" disabled={disabled}>
    {children}
  </Button>
);

export const TextButton = ({
  onClick,
  children,
  disabled = false,
}: {
  onClick: () => void;
  children: React.ReactNode | string;
  disabled?: boolean;
}) => (
  <Button variant="outlined" onClick={onClick} className="" disabled={disabled}>
    {children}
  </Button>
);
