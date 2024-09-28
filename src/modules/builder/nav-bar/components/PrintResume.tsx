import { useEffect } from 'react';

import { StyledButton } from '../atoms';

export const PrintResume = () => {
  useEffect(() => {
    globalThis?.addEventListener('beforeprint', () => {
      globalThis.document.title = `Resume_Builder_${Date.now()}`;
    });

    globalThis?.addEventListener('afterprint', () => {
      globalThis.document.title = 'Single Page Resume Builder';
    });
  }, []);

  return (
    <StyledButton className='text-black bg-color3 px-4 py-1 rounded-full hover:bg-level4 hover:text-bgbase' onClick={globalThis?.print}>
      Download as PDF
    </StyledButton>
  );
};
