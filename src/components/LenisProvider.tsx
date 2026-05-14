"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode, useMemo } from 'react';

export default function LenisProvider({ children }: { children: ReactNode }) {
  const options = useMemo(() => ({ lerp: 0.05, syncTouch: true }), []);

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
