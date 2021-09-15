---
to: src/component/<%= name  %>/<%= name %>.container.tsx
---

import React from 'react';
import { I<%= name %>ContainerProps, <%= name %>Presentation } from '.';

export const <%= name %>: React.FC<I<%= name %>ContainerProps> = () => {
  return <<%= name %>Presentation />;
};
