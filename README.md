# Financial Dashboard v1

A responsive financial dashboard built with **React**, styled using **Tailwind CSS**, and powered by **Context API** for global state management. The goal of this project is to present financial data in a clean, modern, and user-friendly interface.

---

## Project Overview

This dashboard provides a high-level summary of financial metrics and user interactions with dynamic components. It leverages React's component-based architecture for scalability and uses modern tools for development efficiency and performance.

---

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/b-laztornex/financial-dashboard-v1.git
cd financial-dashboard-v1
```

### 2. Install Dependencies

Make sure you have Node.js installed.

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Then open your browser and go to:

```
http://localhost:5173/
```

---

## Why Context API?

The project uses **React Context API** to manage global UI state, such as:

- Sidebar toggle
- Theme switching (dark/light mode)
- User interface preferences

Context API is lightweight and perfect for small to medium-sized apps, offering:

- No need for external state libraries (like Redux)
- Clean and simple global state handling
- Native React support

---

## Why Tailwind CSS?

Tailwind CSS is used to quickly build out the UI with a utility-first approach. Benefits include:

- Rapid styling directly in JSX
- Built-in responsiveness
- Consistent design system
- No need for writing custom CSS classes or files

This makes development faster and design more consistent.

---

## Tech Stack

- **React** – Frontend UI
- **Vite** – Build tool for fast development
- **Tailwind CSS** – Utility-first styling
- **Context API** – State management
- **React Router DOM** – Routing between views

---

## Folder Structure

```
src/
├── assets/        # Static files (icons, images)
├── components/    # Reusable UI components
├── context/       # Global state management
├── data/          # Dummy data files
├── pages/         # Page-level components
├── App.jsx        # Main app wrapper
├── main.jsx       # Entry point
```
