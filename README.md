TDD で FizzBuzz 問題を解いてみる

# 要件
- 入力エリアに数字を入力したら、文字列として出力エリアに表示する
- 入力エリアに 3 の倍数を入力したら、"fizz" を出力エリアに表示する
- 入力エリアに 5 の倍数を入力したら、"buzz" を出力エリアに表示する
- 入力エリアに 3 と 5 の倍数を入力したら、"fizzbuzz" を出力エリアに表示する

# 使用ツール

- [Next.js](https://nextjs.org/) ([React](https://ja.reactjs.org/))
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [EditorConfig](https://editorconfig.org/) + [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/ja/) + [React Testing Library](https://testing-library.com/)

# コマンド

```sh
# develop
yarn dev

# build
yarn build
```

## Lint
```sh
yarn lint

# auto fix
yarn lint --fix
```

## Test
```sh
yarn test

# show verbose
yarn test --verbose

# watch
yarn test --watch

# coverage
yarn test --coverage
```
