import React, { useState } from 'react'
import { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [num, setNum] = useState('')

  const convertFizzbuzz = (e) => {
    // NOTE: 今回は複雑になるので空文字, 0, e などは考慮しない
    const num = Number(e.target.value)
    if (!(num % (3 * 5))) {
      setNum('fizzbuzz')
      return
    }
    if (!(num % 3)) {
      setNum('fizz')
      return
    }
    if (!(num % 5)) {
      setNum('buzz')
      return
    }
    setNum(e.target.value)
  }

  return (
    <div className={styles.container}>
      <p className={styles.input}>
        入力:
        <input
          className={styles.inputFaild}
          type="number"
          data-testid="input"
          onChange={convertFizzbuzz}
        />
      </p>
      <p className={styles.input}>
        出力:
        <span className={styles.outputFaild} data-testid="output">
          {num}
        </span>
      </p>
    </div>
  )
}

export default Home
