import './App.css'

import DOMPurify from 'dompurify'
import marked from 'marked'
import { useEffect, useState } from 'react'

// other options: https://www.npmjs.com/package/markdown-it

function App() {
  const markdownLink =
    'https://raw.githubusercontent.com/npm/marky-markdown/master/README.md'
  const [markdownData, setMarkdownData] = useState('')

  const tableMarkdown = `| Tables        | Are           | Cool  | \n | ------------- |:-------------:| -----:| \n | col 3 is      | right-aligned | $1600 | \n ------ \n [![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)  `
  const markdown = DOMPurify.sanitize(
    '# Heading 1 \n ## Heading 2 \n [I\'m an inline-style link](https://www.google.com) \n\n ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1") '
  )
  const html = marked(markdown)

  const jsCode =
    '```javascript \n var s = "JavaScript syntax highlighting"; \n alert(s);```'

  const codeMarkdown = DOMPurify.sanitize(jsCode)
  const codeHtml = marked(codeMarkdown)

  useEffect(() => {
    const fetchMarkdown = () => {
      if (!!markdownData) return
      fetch(markdownLink)
        .then((data) => data.text())
        .then((text) => {
          setMarkdownData(marked(DOMPurify.sanitize(text)))
        })
    }
    fetchMarkdown()
  }, [markdownData])

  return (
    <div className="App">
      <header className="App-header">
        <h2>Example of Marked down usage</h2>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <h2>Example of Code</h2>
        <div dangerouslySetInnerHTML={{ __html: codeHtml }}></div>
        <h2>Loaded from outside</h2>
        <div dangerouslySetInnerHTML={{ __html: markdownData }}></div>
      </header>
    </div>
  )
}

export default App
