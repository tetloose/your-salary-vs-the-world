/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order', '@stylistic/stylelint-plugin'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'config',
          'variants',
          'responsive',
          'screen',
          'theme',
          'custom',
          'utility',
          'variant',
          'custom-variant',
          'source'
        ]
      }
    ],
    'import-notation': null,
    'no-invalid-position-at-import-rule': null,
    'property-no-unknown': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['grid-template']
      }
    ],
    '@stylistic/declaration-colon-space-after': 'always-single-line',
    '@stylistic/max-empty-lines': 1,
    '@stylistic/string-quotes': 'single',
    '@stylistic/indentation': 2,
    '@stylistic/block-opening-brace-space-before': 'always',
    'color-named': ['never', { ignore: ['inside-function'] }],
    '@stylistic/color-hex-case': 'lower',
    'color-hex-length': 'short',
    '@stylistic/selector-combinator-space-after': 'always',
    '@stylistic/selector-attribute-operator-space-before': 'never',
    '@stylistic/selector-attribute-operator-space-after': 'never',
    '@stylistic/selector-attribute-brackets-space-inside': 'never',
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
    '@stylistic/declaration-block-trailing-semicolon': 'always',
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/max-line-length': 200,
    'max-nesting-depth': [
      3,
      {
        ignore: ['pseudo-classes', 'blockless-at-rules']
      }
    ],
    'order/order': [
      [
        'custom-properties',
        'declarations',
        'rules',
        {
          type: 'at-rule',
          name: 'supports'
        },
        {
          type: 'at-rule',
          name: 'media'
        }
      ],
      {
        severity: 'warning'
      }
    ],
    'order/properties-alphabetical-order': true
  },
  ignoreFiles: [
    '.husky/**',
    '.scripts/**',
    '.vscode/**',
    'node_modules/**',
    'public/**',
    'coverage/**'
  ]
}

export default stylelintConfig
