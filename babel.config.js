module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: { //별칭
          '@': './src', //절대경로 설정
          '@components': './src/components',
          '@screens': './src/screens', // screens 폴더 alias 설정
          '@assets': './src/assets',
        },
      },
    ],
    
    'react-native-reanimated/plugin',
  ],
};
