import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Index from '~/pages/index'

afterEach(cleanup)

// 要件
describe('Fizz Buzz 問題の答えを表示する', () => {
  // 前準備（arrange）
  let inputElement: HTMLElement, outputElement: HTMLElement
  beforeEach(() => {
    const { getByTestId } = render(<Index />)
    inputElement = getByTestId('input')
    outputElement = getByTestId('output')
  })

  // 仕様
  describe('入力エリアに 3 の倍数を入力したら、出力エリアに "fizz" を表示する', () => {
    // テスト内容
    it('入力エリアに "3" を入力したら、出力エリアに "fizz" を表示する', () => {
      // 実行（act）
      fireEvent.change(inputElement, { target: { value: '3' } })
      // 検証（assert）
      expect(outputElement.textContent).toBe('fizz')
    })
  })

  // 仕様
  describe('入力エリアに 5 の倍数を入力したら、出力エリアに "buzz" を表示する', () => {
    // テスト内容
    it('入力エリアに "5" を入力したら、出力エリアに "buzz" を表示する', () => {
      // 実行（act）
      fireEvent.change(inputElement, { target: { value: '5' } })
      // 検証（assert）
      expect(outputElement.textContent).toBe('buzz')
    })
  })

  // 仕様
  describe('ただし、入力エリアに 3 と 5 の倍数を入力したら、出力エリアに "fizzbuzz" を表示する', () => {
    // テスト内容
    it('入力エリアに "15" を入力したら、出力エリアに "fizzbuzz" を表示する', () => {
      // 実行（act）
      fireEvent.change(inputElement, { target: { value: '15' } })
      // 検証（assert）
      expect(outputElement.textContent).toBe('fizzbuzz')
    })
  })

  // 仕様
  describe('それ以外の数字を入力したら、そのまま出力エリアに表示する', () => {
    // テスト内容
    it('入力エリアに "1" を入力したら、出力エリアに "1" を表示する', () => {
      // 実行（act）
      fireEvent.change(inputElement, { target: { value: '1' } })
      // 検証（assert）
      expect(outputElement.textContent).toBe('1')
    })

    // テスト内容
    it('入力エリアに "2" を入力したら、出力エリアに "2" を表示する（三角測量）', () => {
      // 実行（act）
      fireEvent.change(inputElement, { target: { value: '2' } })
      // 検証（assert）
      expect(outputElement.textContent).toBe('2')
    })
  })
})
