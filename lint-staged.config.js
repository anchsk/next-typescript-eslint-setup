module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'npm run type-check',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `npm run lint ${filenames.join(' ')}`,

  // For the TypeScript command, we don't pass filenames as TypeScript cannot be run on isolated files.
  // For the ESLint command, we pass filenames so that we lint only staged files, saving us time.
}
