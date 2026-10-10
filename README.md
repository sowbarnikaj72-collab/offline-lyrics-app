# Offline Lyrics App

A lightweight offline lyrics app built with React, Vite, and Capacitor for Android.

## Features

- Store and display your own song lyrics offline
- Select a song from a simple list
- Adjust lyric text size
- Navigate back to the song list
- Android app support through Capacitor

## Tech Stack

- React
- Vite
- JavaScript
- Capacitor
- Android

## Getting Started

### Prerequisites

- Node.js and npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/shobi-2004/offline-lyrics-app.git
cd offline-lyrics-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Adding Your Own Songs

Edit `songs.json` in the project root. It starts as an empty array.

Add songs using this format:

```json
[
  {
    "title": "My Song",
    "lyrics": "First line\nSecond line\nThird line"
  }
]
```

Each song needs a `title` and a `lyrics` string. Use `\n` to represent line breaks.

## Building for Android

Build the web app:

```bash
npm run build
```

Then sync the web assets with the Android project:

```bash
npx cap sync android
```

Open the Android project using Android Studio to build and run the app.

## License

This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for details.
anyone can use it, thank you.
