import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import eslintParserTypeScript from "@typescript-eslint/parser";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    files: ["**/*.{ts,tsx,cts,mts}"],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        project: true
      }
    }
  },
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss
    },
    rules: {
      // enable all recommended rules to report a warning
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
      // enable all recommended rules to report an error
      ...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,

      "better-tailwindcss/multiline": ["warn", {
        "printWidth": 80,         // 한 줄이 너무 길면 자릅니다 (취향껏 80~120 조절)
        "lineBreakStyle": "unix"  // ★ 중요: 무조건 LF(\n) 방식 사용 강제
      }],
      
      // 3. 일관된 줄바꿈 강제
      "better-tailwindcss/enforce-consistent-line-wrapping": "warn"
    },
    settings: {
      "better-tailwindcss": {
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
        entryPoint: "src/global.css",
        // tailwindcss 3: the path to the tailwind config file (eg: `tailwind.config.js`)
        tailwindConfig: "tailwind.config.js"
      }
    }
  }
])

export default eslintConfig