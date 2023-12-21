const darkTheme = {
  '.maximeheckel-dark': {
    '--base-hue': '266',
    '--white': 'oklch(100% 0 0)',

    '--gray-000': 'oklch(12.92% 0.005 var(--base-hue))',
    '--gray-100': 'oklch(18.68% 0.01 var(--base-hue))',
    '--gray-200': 'oklch(19.75% 0.011 var(--base-hue))',
    '--gray-300': 'oklch(20.8% 0.012 var(--base-hue))',
    '--gray-400': 'oklch(25.84% 0.018 var(--base-hue))',
    '--gray-500': 'oklch(28.69% 0.023 var(--base-hue))',
    '--gray-600': 'oklch(35.33% 0.028 var(--base-hue))',
    '--gray-700': 'oklch(41.6% 0.035 var(--base-hue))',
    '--gray-800': 'oklch(48.49% 0.042 var(--base-hue))',
    '--gray-900': 'oklch(56.78% 0.05 var(--base-hue))',
    '--gray-1000': 'oklch(66.65% 0.04 var(--base-hue))',
    '--gray-1100': 'oklch(77.16% 0.028 var(--base-hue))',
    '--gray-1200': 'oklch(94.23% 0.006 var(--base-hue))',

    '--blue-100': 'oklch(100% 0 var(--base-hue))',
    '--blue-200': 'oklch(98.91% 0.005 var(--base-hue))',
    '--blue-300': 'oklch(96.85% 0.013 var(--base-hue))',
    '--blue-400': 'oklch(93.66% 0.027 var(--base-hue))',
    '--blue-500': 'oklch(88.34% 0.052 var(--base-hue))',
    '--blue-600': 'oklch(82% 0.082 var(--base-hue))',
    '--blue-700': 'oklch(73.65% 0.124 var(--base-hue))',
    '--blue-800': 'oklch(64.6% 0.172 var(--base-hue))',
    '--blue-900': 'oklch(55.52% 0.223 var(--base-hue))',
    '--blue-1000': 'oklch(46.51% 0.225 var(--base-hue))',
    '--blue-1100': 'oklch(36.42% 0.168 var(--base-hue))',
    '--blue-1200': 'oklch(23.85% 0.101 var(--base-hue))',

    '--green-100': 'oklch(23.08% 0.04 170)',
    '--green-200': 'oklch(24.95% 0.04 170)',
    '--green-300': 'oklch(28.57% 0.056 170)',
    '--green-400': 'oklch(33.81% 0.067 170)',
    '--green-500': 'oklch(40.49% 0.081 170)',
    '--green-600': 'oklch(50.03% 0.101 170)',
    '--green-700': 'oklch(60.62% 0.123 170)',
    '--green-800': 'oklch(73.6% 0.150 170)',
    '--green-900': 'oklch(86.02% 0.176 170)',
    '--green-1000': 'oklch(89.3% 0.169 170)',
    '--green-1100': 'oklch(91.18% 0.134 170)',
    '--green-1200': 'oklch(94.49% 0.08 170)',

    '--red-100': 'oklch(20.11% 0.07 22)',
    '--red-200': 'oklch(21.27% 0.075 22)',
    '--red-300': 'oklch(23.51% 0.084 22)',
    '--red-400': 'oklch(26.84% 0.099 22)',
    '--red-500': 'oklch(31.03% 0.116 22)',
    '--red-600': 'oklch(37.24% 0.143 22)',
    '--red-700': 'oklch(43.14% 0.167 22)',
    '--red-800': 'oklch(51.82% 0.204 22)',
    '--red-900': 'oklch(60.12% 0.235 22)',
    '--red-1000': 'oklch(64.51% 0.204 22)',
    '--red-1100': 'oklch(73.3% 0.145 22)',
    '--red-1200': 'oklch(85.47% 0.071 22)',

    '--orange-100': 'oklch(20.38% 0.044 60)',
    '--orange-200': 'oklch(21.87% 0.048 60)',
    '--orange-300': 'oklch(24.79% 0.055 60)',
    '--orange-400': 'oklch(28.78% 0.067 60)',
    '--orange-500': 'oklch(34.43% 0.081 60)',
    '--orange-600': 'oklch(42.19% 0.101 60)',
    '--orange-700': 'oklch(50.38% 0.125 60)',
    '--orange-800': 'oklch(60.87% 0.153 60)',
    '--orange-900': 'oklch(70.93% 0.18 60)',
    '--orange-1000': 'oklch(76.91% 0.165 60)',
    '--orange-1100': 'oklch(83.38% 0.121 60)',
    '--orange-1200': 'oklch(90.99% 0.066 60)',

    '--pink-300': 'oklch(72.39% 0.197 352)',
    '--pink-600': 'oklch(54.25% 0.218 352)',

    '--maximeheckel-colors-brand': 'var(--blue-800)',
    '--maximeheckel-colors-body': 'var(--gray-100)',
    '--maximeheckel-colors-header': 'oklch(from var(--gray-100) l c h / 40%)',
    '--maximeheckel-colors-emphasis': 'oklch(from var(--blue-800) l c h / 7%)',

    '--maximeheckel-colors-foreground': 'var(--gray-300)',
    '--maximeheckel-colors-danger': 'var(--red-1000)',
    '--maximeheckel-colors-danger-emphasis':
      'oklch(from var(--red-1000) l c h / 10%)',
    '--maximeheckel-colors-warning': 'var(--orange-1000)',
    '--maximeheckel-colors-warning-emphasis':
      'oklch(from var(--orange-1000) l c h / 10%)',
    '--maximeheckel-colors-success': 'var(--green-900)',
    '--maximeheckel-colors-success-emphasis':
      'oklch(from var(--green-900) l c h / 10%)',

    '--maximeheckel-colors-typeface-primary': 'var(--blue-400)',
    '--maximeheckel-colors-typeface-secondary': 'var(--gray-1100)',
    '--maximeheckel-colors-typeface-tertiary': 'var(--gray-1000)',
    '--maximeheckel-border-color': 'var(--gray-400)',
    '--maximeheckel-card-background-color': 'var(--gray-300)',
    '--maximeheckel-form-input-active': 'var(--blue-800)',
    '--maximeheckel-form-input-background': 'var(--gray-000)',
    '--maximeheckel-form-input-disabled': 'var(--gray-700)',
    '--maximeheckel-form-input-border': 'var(--gray-600)',
    '--maximeheckel-form-input-focus': 'var(--blue-900)',
    '--shadow-color': 'var(--local-shadow-color, 223deg 5% 1%)',
    '--code-snippet-background': 'var(--gray-300)',
    '--token-comment': 'var(--gray-1000)',
    '--token-selector': 'var(--blue-600)',
    '--token-symbol': 'var(--blue-800)',
    '--token-operator': 'var(--orange-1200)',
    '--token-keyword': 'var(--blue-700)',
    '--token-function': 'var(--pink-300)',
    '--token-punctuation': 'var(--blue-600)',

    '@supports not (color: rgb(from white r g b))': {
      '--maximeheckel-colors-header':
        'oklch(18.68% 0.01 var(--base-hue) / 40%)',
      '--maximeheckel-colors-emphasis':
        'oklch(64.6% 0.172 var(--base-hue) / 7%)',

      '--maximeheckel-colors-danger-emphasis': 'oklch(64.51% 0.204 22 / 10%)',
      '--maximeheckel-colors-warning-emphasis': 'oklch(76.91% 0.165 60 / 10%)',
      '--maximeheckel-colors-success-emphasis': 'oklch(86.02% 0.176 170 / 10%)',
    },
  },
};

export default darkTheme;
