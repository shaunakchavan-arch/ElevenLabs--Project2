//:lock: IMPORTANT
// Put your NEW ElevenLabs API key here — DO NOT share it anywhere.
const ELEVEN_API_KEY = "sk_a51e5337c42d21a4c6f92480badba02780d1acbc556bdc92";

// Your Agent ID (safe to share)
const AGENT_ID = "agent_9701k94p0f6feay9aa0y6t93qnt2";

const startBtn = document.getElementById("startInterviewBtn");
const endBtn = document.getElementById("endInterviewBtn");
const modal = document.getElementById("interviewModal");
const agentContainer = document.getElementById("agentContainer");

startBtn.addEventListener("click", () => {
    modal.style.display = "block";

    agentContainer.innerHTML = `
        <elevenlabs-convai 
            agent-id="${AGENT_ID}" 
            api-key="${ELEVEN_API_KEY}"
        ></elevenlabs-convai>
    `;
});

endBtn.addEventListener("click", () => {
    modal.style.display = "none";
    agentContainer.innerHTML = "";
});
