import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import reactHooksRecommended from 'eslint-plugin-react-hooks'
import jsxA11yRecommended from 'eslint-plugin-jsx-a11y'
import importRecommended from 'eslint-plugin-import'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  reactRecommended,
  prettierRecommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    ignores: ['jest.config.js', 'node_modules/', 'dist/', 'public/'],
    plugins: {
      'react-hooks': reactHooksRecommended,
      'jsx-a11y': jsxA11yRecommended,
      import: importRecommended
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
      globals: {
        browser: true,
        jest: true
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/alt-text': 'off',
      'react-hooks/exhaustive-deps': 'off',
      indent: ['error', 2],
      'linebreak-style': 'off',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'never']
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
