/**
 * StagePlayerLayout.tsx
 * Renders the layout of the StagePlayer
 */
import * as React from 'react';
import styledComponents from 'styled-components';

interface StagePlayerLayoutProps {
  className?: string;
}

const component: React.SFC<StagePlayerLayoutProps> = ({ children, className }) => (
  <section className={className}>
    <div>{children}</div>
  </section>
);

export const StagePlayerLayout = styledComponents(component)`
  background-color: black;
`;
