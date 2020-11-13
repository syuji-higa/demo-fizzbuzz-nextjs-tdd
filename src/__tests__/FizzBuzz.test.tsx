import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Index from '~/pages/index'

afterEach(cleanup)

describe('入力された値を fizzbuzz 問題の答えとして表示する', (): void => {
  it.todo('入力エリアに数字を入力したら、文字列として出力エリアに表示する')

  it.todo('入力エリアに 3 の倍数を入力したら、"fizz" を出力エリアに表示する')

  it.todo('入力エリアに 5 の倍数を入力したら、"buzz" を出力エリアに表示する')

  it.todo('入力エリアに 3 と 5 の倍数を入力したら、"fizzbuzz" を出力エリアに表示する')
})
