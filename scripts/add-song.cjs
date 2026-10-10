const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function addSong() {
  console.log("\n🎵 Add a New Song\n");

  const title = await ask("Song title: ");

  console.log("\nPaste the lyrics below.");
  console.log("When you're finished, type END on a new line.\n");

  const lines = [];

  rl.on("line", (line) => {
    if (line === "END") {
      saveSong();
    } else {
      lines.push(line);
    }
  });

  function saveSong() {
    const lyrics = lines.join("\n");

    let songs = [];

    if (fs.existsSync("songs.json")) {
      const data = fs.readFileSync("songs.json", "utf8");

      if (data.trim()) {
        songs = JSON.parse(data);
      }
    }

    songs.push({
      title: title,
      lyrics: lyrics
    });

    fs.writeFileSync(
      "songs.json",
      JSON.stringify(songs, null, 2)
    );

    console.log("\n✅ Song added successfully!");
    console.log(`🎵 ${title}\n`);

    rl.close();
  }
}

addSong();