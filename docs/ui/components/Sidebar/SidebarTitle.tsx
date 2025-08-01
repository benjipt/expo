import type { ComponentType, HTMLAttributes, PropsWithChildren } from 'react';

import { LABEL } from '../Text';

type SidebarTitleProps = {
  Icon?: ComponentType<HTMLAttributes<SVGSVGElement>>;
  sectionName?: string;
} & PropsWithChildren;

export const SidebarTitle = ({ children, Icon, sectionName }: SidebarTitleProps) => (
  <div
    className="relative -mr-4 ml-3 flex items-center gap-2 pb-1"
    {...(sectionName && { 'data-section-name': sectionName })}>
    {Icon && <Icon className="icon-sm" />}
    <LABEL weight="medium" crawlable={false}>
      {children}
    </LABEL>
  </div>
);
