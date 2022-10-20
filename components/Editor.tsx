import React from "react"
import styles from "../styles/Home.module.css"
const Editor = ({ input, red, onKeyDown }: { input: string, red: boolean, onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void }) => {

    return (
        <div className={styles.textEditorContainer} onKeyDown={(e) => onKeyDown(e)} contentEditable>
            <div>

                <div
                    className={red ? styles.red : ""} >
                    <span>
                        {input}
                    </span>
                    <img src="https://imgs.search.brave.com/5HQBrsaMCKrNxqnMNDA16Xxg7QkzT5pZq0nyHXo2I2I/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/dnhodFFxcjVGb3Vi/R2pxNHNJWHVnSGFF/byZwaWQ9QXBp" alt="nature" />
                </div>
            </div>
        </div>
    )
}
export default Editor