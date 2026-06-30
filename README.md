# HtmlToPDFRenderer Previewer

A web-based tool designed to mimic the behavior of HTML-to-PDF rendering libraries like PuppeteerSharp and HtmlRenderer.PDFSharp. This tool provides a real-time preview of how your HTML and CSS will be rendered as a PDF document (A4 size).

## Features

- **Real-time Preview**: See your HTML and CSS changes rendered instantly in an A4-proportioned iframe.
- **Premium Code Editors**: Integrated Monaco Editors (the same editor that powers VS Code) for both HTML and CSS, featuring syntax highlighting and automatic formatting.
- **Modern Interface**: A sleek, dark-mode design with glassmorphism elements, providing a distraction-free environment.

## Getting Started

To run this tool locally, follow these steps:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start the Development Server**:
    ```bash
    npm run dev
    ```

3.  **Open in Browser**:
    Navigate to the URL provided in the terminal (usually `http://localhost:5173`).

## Usage

1.  **HTML Editor (Left Top)**: Enter your raw HTML structure here. It will be injected directly into the `<body>` of the preview.
2.  **CSS Editor (Left Bottom)**: Enter your custom CSS styles here. They will be injected into a `<style>` block in the `<head>` of the preview.
3.  **Preview Pane (Right)**: The preview will automatically update as you type. It maintains an A4 aspect ratio and scales down to fit your screen.

## Technologies Used

-   [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
-   [Monaco Editor](https://microsoft.github.io/monaco-editor/) via `@monaco-editor/react`
-   Vanilla CSS for styling
