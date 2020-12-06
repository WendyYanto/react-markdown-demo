
import './App.css';

import DOMPurify from 'dompurify';
import marked from 'marked';

function App() {
  const markedDown = DOMPurify.sanitize('# Marked in Node.js \n\n Rendered by **marked**.')
  const html = marked(markedDown);

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Example of Marked down usage
        </h2>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </header>
    </div>
  );
}

export default App;
