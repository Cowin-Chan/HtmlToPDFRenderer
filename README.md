# HTML To PDF Renderer

This is a tool for rendering HTML with CSS to PDF. It is a web-based application that mimics the behavior of tools like `HtmlRenderer` and `PuppeteerSharp`.

## Features

- **HTML Rendering**: Renders HTML content with proper CSS styling.
- **PDF Generation**: Converts the rendered HTML to PDF format.
- **Web Interface**: Provides a user-friendly interface for uploading HTML/CSS files or entering HTML content directly.

## Usage

### Online Usage

You can use the tool directly via its web interface at: [https://cowinchan.github.io/HtmlToPDFRenderer/](https://cowinchan.github.io/HtmlToPDFRenderer/)

1.  Open the web page.
2.  Choose to upload a `HTML` + `CSS` file or enter `HTML` content directly.
3.  (Optional) Provide a custom PDF filename.
4.  Click "Convert" to generate the PDF.
5.  Download the resulting PDF file.

### Local Development

To run this project locally, you can use Python's built-in `http.server` module.

1.  Navigate to the project directory in your terminal:
    ```bash
    cd path/to/HtmlToPDFRenderer
    ```

2.  Start the development server:
    ```bash
    python -m http.server 8000
    ```

3.  Open your web browser and go to:
    -   [http://localhost:8000](http://localhost:8000) (Main interface)
    -   [http://localhost:8000/api.html](http://localhost:8000/api.html) (API documentation)