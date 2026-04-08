
<div align="center">

<img src="./readme_assets/logo.png">

# Tool Verse

A curated collection of web tools and utilities to simplify your digital workflow. From image manipulation to 

[![Maintained](https://img.shields.io/badge/Maintained-Yes-2ea44f?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)](#-contributing)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## ⚙️ Installation

To get started with Tool Verse locally, follow these simple steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/senuda-d/tool-verse.git
    cd tool-verse
    ```

2.  **Install the relevant packages**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Navigate to `http://localhost:5173` to view the application.

## 🚀 Features

<p align="center">
  <b>Transforming your digital workflow, one tool at a time.</b>
</p>

- **Quick Access**: Find popular online tools instantly.
- **Categorized**: Tools are organized by type (Image, Video, etc.).
- **Modern UI**: A clean, responsive interface built with React and Vite.

## 🤝 Contributing

We welcome contributions from everyone! Whether you're fixing a bug, improving documentation, or adding a new feature, your help is appreciated.

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

---

## ➕ How to Add a New Tool Easily

Adding a new tool to Tool Verse is simple! You just need to update one file.

1.  Navigate to [src/tools/tools.js](src/tools/tools.js).
2.  Add a new tool object to the `tools` array. Each tool should have the following structure:

```javascript
{
  id: <unique_number>,
  name: "Tool Name",
  description: "A short description of what the tool does.",
  icon: "URL_TO_ICON_OR_PATH_TO_LOCAL_ASSET",
  category: "Category Name (e.g., Image, Video, Utility)",
  url: "https://the-tool-website.com"
}
```

**Example:**
```javascript
{
  id: 4,
  name: "SVG Compressor",
  description: "Compress SVG files efficiently.",
  icon: "https://example.com/svg-icon.png",
  category: "Image",
  url: "https://jakearchibald.github.io/svgomg/"
}
```

3. Save the file and that's it! The new tool will automatically appear on the home page.

---

## 🛠️ Tech Stack

- **Frontend Core**: 
  - [React 19](https://react.dev/) - UI Library
  - [ReactDOM 19](https://reactjs.org/docs/react-dom.html) - DOM rendering
- **Build & Development**:
  - [Vite 8](https://vitejs.dev/) - Next Generation Frontend Tooling
  - [ESLint 9](https://eslint.org/) - Pluggable linting utility
- **React Plugins**:
  - `@vitejs/plugin-react` - Fast Refresh for React
  - `eslint-plugin-react-hooks` - Linting for React hooks
  - `eslint-plugin-react-refresh` - HMR for React components
- **Styling**: Modern CSS with CSS Variables

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
