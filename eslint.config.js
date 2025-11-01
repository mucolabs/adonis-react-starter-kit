import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import { julr } from '@julr/tooling-configs/eslint'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactCompiler from 'eslint-plugin-react-compiler'

const config = await julr({
  unocss: false,
  vue: false,
  typescript: { forceDecorators: true, typeAwareRules: false },
}).append({
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  plugins: {
    react,
    'react-hooks': reactHooks,
    'jsx-a11y': jsxA11y,
    'react-compiler': reactCompiler,
    'react-refresh': reactRefresh,
  },

  languageOptions: { ...react.configs.flat.recommended.languageOptions },
  settings: { react: { version: 'detect' } },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...jsxA11y.configs.recommended.rules,
    'react-compiler/react-compiler': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-refresh/only-export-components': 'error',

    // Not recommended to be turned on
    '@typescript-eslint/no-redeclare': 'off',
    // Common pattern in AdonisJS
    '@typescript-eslint/no-empty-object-type': 'off',
  },
})

export default config
