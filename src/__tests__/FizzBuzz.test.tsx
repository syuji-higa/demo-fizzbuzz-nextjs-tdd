import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Index from '~/pages/index'

afterEach(cleanup)

// 要件
describe('Fizz Buzz 整列と変換規則を扱う実装', () => {
  // 仕様
  it.todo(
    '入力エリアに 3 と 5 の倍数を入力したら、出力エリアに "fizzbuzz" を表示する'
  )
  // 仕様
  it.todo('入力エリアに 3 の倍数を入力したら、出力エリアに "fizz" を表示する')
  // 仕様
  it.todo('入力エリアに 5 の倍数を入力したら、出力エリアに "buzz" を表示する')
  // 仕様
  it.todo('その他の数字を入力したら、そのまま出力エリアに表示する')
})
