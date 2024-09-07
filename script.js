
document.addEventListener('DOMContentLoaded', (event) => {
    const playBtn = document.querySelector('.play-btn');
    const body = document.querySelector('.body');
    const lyricsContainer = document.getElementById('lyrics');

    const lyrics = [
        { text: "sak ahahahaha", delay: 0.06 },
        { text: "baho ng kiki mo,", delay: 0.08 },
        { text: "pati kay mabel", delay: 0.1 },
        { text: "asim", delay: 0.12 },
     
    
    ];

    const delays = [0.12, 0.23, 0.6, 0.5, 3];

    async function displayLyrics() {
        for (let i = 0; i < lyrics.length; i++) {
            let line = lyrics[i].text;
            let charDelay = lyrics[i].delay;
            for (let char of line) { 
                lyricsContainer.innerHTML += char;
                await new Promise(resolve => setTimeout(resolve, charDelay * 1000));
            }
            await new Promise(resolve => setTimeout(resolve, delays[i] * 1000));
            lyricsContainer.innerHTML += '\n';
            lyricsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
    }

    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';

        // Create a new div for the background animation
        const backgroundFade = document.createElement('div');
        backgroundFade.className = 'background-fade';
        backgroundFade.style.backgroundImage = 'url("./images/sadCat.jpg")';
        body.appendChild(backgroundFade);

        displayLyrics();
    });
});
