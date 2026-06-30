import React, { useEffect, useRef, useState } from 'react';

const PreviewPane = ({ html, css }) => {
  const iframeRef = useRef(null);
  const [hideLogic, setHideLogic] = useState(true);

  // If hideLogic is enabled, strip out Scriban/Liquid template tags {{ ... }}
  const processedHtml = hideLogic ? html.replace(/\{\{[\s\S]*?\}\}/g, '') : html;

  const baseCss = `
    body, html {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: white;
      overflow-x: hidden;
    }
    * {
      box-sizing: border-box;
    }
    body {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
  `;

  let combinedSrcDoc = '';
  
  if (processedHtml.toLowerCase().includes('<html')) {
    const styleInjection = `<style>\n${baseCss}\n/* User's injected CSS */\n${css}\n</style>`;
    if (processedHtml.toLowerCase().includes('</head>')) {
      combinedSrcDoc = processedHtml.replace(/(<\/head>)/i, `${styleInjection}\n$1`);
    } else if (processedHtml.toLowerCase().includes('</body>')) {
      combinedSrcDoc = processedHtml.replace(/(<\/body>)/i, `${styleInjection}\n$1`);
    } else {
      combinedSrcDoc = processedHtml + styleInjection;
    }
  } else {
    combinedSrcDoc = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PDF Preview</title>
        <style>
          ${baseCss}
          /* User's injected CSS */
          ${css}
        </style>
      </head>
      <body>
        ${processedHtml}
      </body>
      </html>
    `;
  }

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h3>PDF Preview (A4)</h3>
        <button 
          className={`toggle-logic-btn ${hideLogic ? 'active' : ''}`}
          onClick={() => setHideLogic(!hideLogic)}
          title="Toggle visibility of template tags (e.g. {{ ... }})"
        >
          {hideLogic ? 'Show Template Logic' : 'Hide Template Logic'}
        </button>
      </div>
      <div className="preview-content">
        <div className="page-wrapper">
          <iframe
            ref={iframeRef}
            title="PDF Preview"
            srcDoc={combinedSrcDoc}
            className="a4-iframe"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewPane;
