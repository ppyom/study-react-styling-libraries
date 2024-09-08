import {
  NativeCSS,
  ModuleCSS,
  TailwindCSS,
  Bootstrap,
  StyledComponent,
} from '@srsl/ui';

const routes = [
  { title: 'NativeCSS', pathname: 'native', Element: NativeCSS },
  { title: 'ModuleCSS', pathname: 'module', Element: ModuleCSS },
  { title: 'TailwindCSS', pathname: 'tailwind', Element: TailwindCSS },
  { title: 'Bootstrap', pathname: 'bootstrap', Element: Bootstrap },
  { title: 'StyledComponent', pathname: 'styled', Element: StyledComponent },
];

export { routes };
