import React from 'react';
import Editor from '@monaco-editor/react';

const EditorPane = ({ title, language, value, onChange }) => {
  return (
    <div className="editor-pane">
      <div className="editor-header">
        <h3>{title}</h3>
      </div>
      <div className="editor-content">
        <Editor
          height="100%"
          language={language}
          theme="vs-dark"
          value={value}
          onChange={onChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            padding: { top: 16 },
            fontFamily: "'Fira Code', 'Roboto Mono', monospace",
            lineHeight: 24,
            scrollBeyondLastLine: false,
            wordWrap: 'on'
          }}
        />
      </div>
    </div>
  );
};

export default EditorPane;
