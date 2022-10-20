import type { NextPage } from 'next'
import { useState } from 'react'
import Editor from '../components/Editor'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [text, setText] = useState("mahesh")
  const insertText = () => {
    setText("mahesh babu")
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key)
  }
  return (
    <div className={styles.container}>
      <div>
        Text Editor
      </div>
      <div>
        <button onClick={insertText}>Add text</button>
      </div>

      <Editor input={text} red={true} onKeyDown={onKeyDown} />
    </div>
  )
}

export default Home
