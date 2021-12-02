import React from 'react';
import { SpicyTextWrapper } from './SpicyText.styled';

const SpicyText = ({children}) => {
  return (
    <SpicyTextWrapper>{children}</SpicyTextWrapper>
  )
}

export default SpicyText;