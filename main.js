import javascriptLogo from './javascript.svg'
import { getQuote } from './quote.js'
import './style.css'
import './scss/main.scss'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Quote Fitness Generator Vite JS!</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <div class="card">
      <button id="quote" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

getQuote(document.querySelector('#quote'))
