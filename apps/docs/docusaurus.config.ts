import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'react-country-region-selector',
  tagline: '',
  favicon: undefined,

  // Set the production url of your site here
  url: 'https://country-regions.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/react-country-region-selector',

  // GitHub pages deployment config
  organizationName: 'benkeen',
  projectName: 'react-country-region-selector',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'react-country-region-selector',
      items: [
        {
          href: 'https://github.com/country-regions/react-country-region-selector',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
    },
    /*
    theme$j as dracula,
    theme$i as duotoneDark,
    theme$h as duotoneLight,
    theme$g as github,
    theme$1 as gruvboxMaterialDark,
    theme as gruvboxMaterialLight,
    theme$5 as jettwaveDark,
    theme$4 as jettwaveLight,
    theme$f as nightOwl,
    theme$e as nightOwlLight,
    theme$d as oceanicNext,
    theme$c as okaidia,
    theme$3 as oneDark,
    theme$2 as oneLight,
    theme$b as palenight,
    theme$a as shadesOfPurple,
    theme$9 as synthwave84,
    theme$8 as ultramin,
    theme$7 as vsDark,
    theme$6 as vsLight,
*/
    prism: {
      theme: prismThemes.oceanicNext,
      darkTheme: prismThemes.oceanicNext,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
