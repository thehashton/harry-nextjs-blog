import React from 'react';
import { SpicyTextWrapper } from './SpicyText.styled';

const SpicyText = ({children}) => {
  return (
    <SpicyTextWrapper className="fire burn">{children}</SpicyTextWrapper>
  )
}

export default SpicyText;