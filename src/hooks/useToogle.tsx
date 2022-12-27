import React, { useState } from 'react';

export const useToogle = (initialState: boolean = false) => {
  const [state, setState] = useState(initialState);

  const toogle = (): void => {
    setState((oldState) => !oldState);
  };

  return [state, toogle] as const;
};
