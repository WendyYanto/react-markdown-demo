
import './App.css';

import DOMPurify from 'dompurify';
import marked from 'marked';

function App() {
  const markedDown = DOMPurify.sanitize('# Heading 1 \n ## Heading 2 \n [I\'m an inline-style link](https://www.google.com) \n\n ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1") ')
  const html = marked(markedDown);

  const jsCode = '```javascript \n var s = "JavaScript syntax highlighting"; \n alert(s);```'

  const codeMarkedDown = DOMPurify.sanitize(jsCode)
  const codeHtml = marked(codeMarkedDown);

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Example of Marked down usage
        </h2>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
        <h2>
          Example of Code
        </h2>
        <div dangerouslySetInnerHTML={{__html: codeHtml}}></div>
      </header>
    </div>
  );
}

export default App;
