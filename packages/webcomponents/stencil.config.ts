import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'webcomponents',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "@my-company/webcomponents",
      proxiesFile: '../react/src/index.ts',
      includePolyfills: true,
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    { type: 'dist-hydrate-script' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
