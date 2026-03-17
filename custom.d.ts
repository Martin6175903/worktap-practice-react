declare module '*.svg' {
  import type * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.svg?react' {
  import type * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
//
// declare module '*.svg?url' {
//   const content: string;
//   export default content;
// }