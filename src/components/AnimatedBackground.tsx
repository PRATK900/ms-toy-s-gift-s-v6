import React from 'react';

/**
 * AnimatedBackground (Legacy section background wrapper)
 * Deprecated in favor of the page-wide ToyBoxWorldBackground mounted in App.tsx.
 * Renders null to guarantee zero section-by-section duplicate layers or seams.
 */
export type BackgroundVariant =
  | 'hero'
  | 'categories'
  | 'featured'
  | 'arrivals'
  | 'concierge'
  | 'catalog'
  | 'stores'
  | 'about'
  | 'subtle';

export interface AnimatedBackgroundProps {
  variant?: BackgroundVariant;
  showMotifs?: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = () => {
  return null;
};
