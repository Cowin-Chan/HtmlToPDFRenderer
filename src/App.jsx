import React, { useState } from 'react';
import EditorPane from './components/EditorPane';
import PreviewPane from './components/PreviewPane';
import './index.css';

const defaultHtml = `
<div class="invoice-box">
  <table>
    <tr class="top">
      <td colspan="2">
        <table>
          <tr>
            <td class="title">
              <h2>My Company</h2>
            </td>
            <td>
              Invoice #: 123<br />
              Created: June 30, 2026<br />
              Due: July 30, 2026
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr class="information">
      <td colspan="2">
        <table>
          <tr>
            <td>
              Acme Corp.<br />
              12344 Business St.<br />
              Business City, BC 54321
            </td>
            <td>
              John Doe<br />
              john@example.com
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr class="heading">
      <td>Item</td>
      <td>Price</td>
    </tr>
    <tr class="item">
      <td>Website design</td>
      <td>$300.00</td>
    </tr>
    <tr class="item last">
      <td>Domain name (1 year)</td>
      <td>$10.00</td>
    </tr>
    <tr class="total">
      <td></td>
      <td>Total: $310.00</td>
    </tr>
  </table>
</div>
`;

const defaultCss = `
body {
  font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
  color: #333;
}

.invoice-box {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 24px;
}

.invoice-box table {
  width: 100%;
  line-height: inherit;
  text-align: left;
  border-collapse: collapse;
}

.invoice-box table td {
  padding: 5px;
  vertical-align: top;
}

.invoice-box table tr td:nth-child(2) {
  text-align: right;
}

.invoice-box table tr.top table td.title {
  font-size: 45px;
  line-height: 45px;
  color: #333;
}

.invoice-box table tr.information table td {
  padding-bottom: 40px;
}

.invoice-box table tr.heading td {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.invoice-box table tr.item td {
  border-bottom: 1px solid #eee;
}

.invoice-box table tr.item.last td {
  border-bottom: none;
}

.invoice-box table tr.total td:nth-child(2) {
  border-top: 2px solid #eee;
  font-weight: bold;
}
`;

function App() {
  const [html, setHtml] = useState(defaultHtml.trim());
  const [css, setCss] = useState(defaultCss.trim());

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-area">
          <div className="logo-icon">📄</div>
          <h1>HtmlToPDFRenderer Previewer</h1>
        </div>
        <p className="subtitle">Real-time web preview of your PDF rendering setup</p>
      </header>
      
      <main className="main-layout">
        <div className="editors-column">
          <EditorPane
            title="HTML"
            language="html"
            value={html}
            onChange={setHtml}
          />
          <div className="resizer"></div>
          <EditorPane
            title="CSS"
            language="css"
            value={css}
            onChange={setCss}
          />
        </div>
        
        <div className="preview-column">
          <PreviewPane html={html} css={css} />
        </div>
      </main>
    </div>
  );
}

export default App;
