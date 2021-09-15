---
to: src/screen/<%= name  %>/<%= name %>Screen.container.tsx
---

import React from 'react';
import { I<%= name %>ScreenContainerProps, <%= name %>ScreenPresentation } from '.';

export const <%= name %>Screen: React.FC<I<%= name %>ScreenContainerProps> = (props) => {
  return <<%= name %>ScreenPresentation {...props} />;
};
