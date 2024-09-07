import { NativeCSS, ModuleCSS, TailwindCSS } from '@srsl/ui';

const routes = [
  { title: 'NativeCSS', pathname: 'native', Element: NativeCSS },
  { title: 'ModuleCSS', pathname: 'module', Element: ModuleCSS },
  { title: 'TailwindCSS', pathname: 'tailwind', Element: TailwindCSS },
];

export { routes };
