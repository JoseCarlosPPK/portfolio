import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
   globalIgnores(['dist']),
   {
      files: ['**/*.{js,jsx}'],
      extends: [
         js.configs.recommended,
         reactHooks.configs.flat.recommended,
         reactRefresh.configs.vite,
         reactHooks.configs.flat.recommended,
         react.configs.flat.recommended, // Para prop validation
      ],
      languageOptions: {
         ecmaVersion: 2020,
         globals: globals.browser,
         parserOptions: {
            ecmaVersion: 'latest',
            ecmaFeatures: { jsx: true },
            sourceType: 'module',
         },
      },
      rules: {
         'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
         'react/prop-types': 'warn',
         'react/react-in-jsx-scope': 'off',
      },
      // Para que ESlint sepa la versión de React que estamos usando y aplique las reglas adecuadas
      settings: {
         react: {
            version: 'detect',
         },
      },
   },
])
