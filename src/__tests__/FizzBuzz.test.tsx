import * as React from 'react'
import { render, cleanup, fireEvent, act } from '@testing-library/react'
import Index from '~/pages/index'

afterEach(cleanup)

// 仕様
describe('Fizz Buzz 整列と変換規則を扱う実装', () => {
  // 要件
  describe('入力エリアに 3 と 5 の倍数を入力したら、出力エリアに "fizzbuzz" を表示する', () => {
    // テスト内容
    it('入力エリアに "15" を入力したら、出力エリアに "fizzbuzz" を表示する', () => {
      // 準備（arrange）
      const { getByTestId } = render(<Index />)
      const inputElement = getByTestId('input')
      const outputElement = getByTestId('output')
      // 実行（act）
      fireEvent.change(inputElement, { target: { value: '15' } })
      // 検証（assert）
      expect(outputElement.textContent).toBe('fizzbuzz')
    })
  })

  // 要件
  describe('入力エリアに 3 の倍数を入力したら、出力エリアに "fizz" を表示する', () => {
    // テスト内容
    it('入力エリアに "3" を入力したら、出力エリアに "fizz" を表示する', () => {
      // 準備（arrange）
      const { getByTestId } = render(<Index />)
      const inputElement = getByTestId('input')
      const outputElement = getByTestId('output')
      // 実行（act）
      fireEvent.change(inputElement, { target: { value: '3' } })
      // 検証（assert）
      expect(outputElement.textContent).toBe('fizz')
    })
  })

  // 要件
  describe('入力エリアに 5 の倍数を入力したら、出力エリアに "buzz" を表示する', () => {
    // テスト内容
    it('入力エリアに "5" を入力したら、出力エリアに "buzz" を表示する', () => {
      // 準備（arrange）
      const { getByTestId } = render(<Index />)
      const inputElement = getByTestId('input')
      const outputElement = getByTestId('output')
      // 実行（act）
      fireEvent.change(inputElement, { target: { value: '5' } })
      // 検証（assert）
      expect(outputElement.textContent).toBe('buzz')
    })
  })

  // 要件
  describe('その他の数字を入力したら、そのまま出力エリアに表示する', () => {
    // テスト内容
    it('入力エリアに "1" を入力したら、出力エリアに "1" 表示する', () => {
      // 準備（arrange）
      const { getByTestId } = render(<Index />)
      const inputElement = getByTestId('input')
      const outputElement = getByTestId('output')
      // 実行（act）
      fireEvent.change(inputElement, { target: { value: '1' } })
      // 検証（assert）
      expect(outputElement.textContent).toBe('1')
    })

    // テスト内容（三角測量：関連するテストをすべて書いたら消す）
    it('入力エリアに "2" を入力したら、出力エリアに "2" 表示する', () => {
      // 準備（arrange）
      const { getByTestId } = render(<Index />)
      const inputElement = getByTestId('input')
      const outputElement = getByTestId('output')
      // 実行（act）
      fireEvent.change(inputElement, { target: { value: '2' } })
      // 検証（assert）
      expect(outputElement.textContent).toBe('2')
    })
  })
})
