let btn = document.querySelector("#btn");
let text = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(message) {
    let text_speech = new SpeechSynthesisUtterance(message);

    text_speech.rate = 1;
    text_speech.pitch = 1;
    text_speech.lang = "hi-IN";
    text_speech.volume = 1;

    window.speechSynthesis.speak(text_speech);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();

    if (hours >= 0 && hours < 12) {
        speak("Good Morning JATIN SIR");
    }
    else if (hours >= 12 && hours < 18) {
        speak("Good Afternoon JATIN SIR");
    }
    else {
        speak("Good Evening JATIN SIR");
    }
}

// Page load par greeting
// window.addEventListener("load", () => {
//     wishMe();
// });

let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

recognition.onresult = (event) => {

    let currentIndex = event.resultIndex;

    let transcript =
        event.results[currentIndex][0].transcript;

    text.innerText = transcript;

    console.log(transcript);

    takeCommand(transcript);
};

btn.addEventListener("click", () => {

    recognition.start();

    btn.style.display = "none";
    voice.style.display = "block";

});

function takeCommand(message) {

    btn.style.display = "flex";
    voice.style.display = "none";

    message = message.toLowerCase();

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
    ) {
        speak("Namaste JATIN SIR, main aapki kaise madad kar sakta hoon?");
    }

    else if (
        message.includes("how are you") ||
        message.includes("how are you doing") ||
        message.includes("how are you doing today")
    ) {
        speak("Main theek hoon JATIN SIR, aap kaise ho?");
    }

    else if (
        message.includes("what is your name") ||
        message.includes("who are you")
    ) {
        speak("Mera naam JOJO hai, main aapka AI assistant hoon.");
    }

    else if (
        message.includes("what time is it") ||
        message.includes("tell me the time") ||
        message.includes("current time") ||
        message.includes("time")
    ) {
        let time = new Date().toLocaleTimeString();

        speak(`JATIN SIR, abhi ka samay hai ${time}`);
    }

    else if (message.includes("open google")) {
        speak("Google khol raha hoon JATIN SIR");
        window.open("https://www.google.com", "_blank");
    }

    else if (message.includes("open youtube")) {
        speak("YouTube khol raha hoon JATIN SIR");
        window.open("https://www.youtube.com", "_blank");
    }

    else if (message.includes("open facebook")) {
        speak("Facebook khol raha hoon  JATIN SIR");
        window.open("https://www.facebook.com", "_blank");
    }

    else if (message.includes("open instagram")) {
        speak("Instagram khol raha hoon  JATIN SIR");
        window.open("https://www.instagram.com", "_blank");
    }

    else if (message.includes("open chatgpt")) {
        speak("CHAT G P T khol raha hoon  JATIN SIR");
        window.open("https://www.chatgpt.com", "_blank");
    }

    else if (message.includes("open linkedin")) {
        speak("LinkedIn khol raha hoon  JATIN SIR");
        window.open("https://www.linkedin.com", "_blank");
    }

    else if (message.includes("open github")) {
        speak("GitHub khol raha hoon  JATIN SIR");
        window.open("https://www.github.com", "_blank");
    }

    else if (message.includes("open kick")) {
        speak("Kick khol raha hoon  JATIN SIR");
        window.open("https://www.kick.com", "_blank");
    }

    else if (message.includes("open whatsapp")) {
        speak("WhatsApp khol raha hoon  JATIN SIR");
        window.open("https://web.whatsapp.com", "_blank");
    }

    else if (message.includes("open calculator")) {
        speak("Calculator khol raha hoon  JATIN SIR");
        window.open("calculator://");
    }

    else {
        speak("Searching on Google JATIN SIR");

        window.open(
            `https://www.google.com/search?q=${encodeURIComponent(message)}`,
            "_blank"
        );
    }
}
