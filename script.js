const agriFAQs = {
  "organic farming": "Organic farming avoids chemical fertilizers and pesticides, focusing on natural compost, crop rotation, and biological pest control.",
  "rice planting": "Rice is usually planted in the wet season (May-July) and requires flooded fields.",
  "soil testing": "You can use a pH kit or consult agricultural extension centers for professional soil testing.",
  "best fertilizer": "Compost, cow manure, and vermicompost are eco-friendly and effective.",
  "pest control": "Use neem spray, introduce natural predators like ladybugs, or use sticky traps.",
  "drip irrigation": "A water-efficient system where water drips slowly to plant roots — great for water conservation.",
  "mulching": "Mulching with dry leaves or straw reduces water evaporation and prevents weeds.",
  "crop rotation": "Changing crops seasonally prevents soil depletion and controls pests.",
  "summer crops": "Popular crops in summer: maize, cotton, millet, okra, and brinjal.",
  "greenhouse farming": "Growing crops in controlled environments — protects from pests and climate changes.",
  "hydroponics": "A method of growing plants using water-based nutrient solutions without soil.",
  "climate smart agriculture": "An approach that helps farmers adapt to climate change while increasing productivity.",
  "organic pesticide": "Neem oil, garlic spray, chili extract — all work as natural pesticides.",
  "vermicomposting": "Using earthworms to turn organic waste into nutrient-rich compost.",
  "weed control": "Weeds can be managed with mulching, crop spacing, and weeding tools.",
  "best season for wheat": "Wheat is typically sown in winter (October-December) and harvested in spring."
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  if (!userText) return;

  addMessage("user", userText);
  input.value = "";

  setTimeout(() => {
    const reply = getBotReply(userText);
    addMessage("bot", reply);
  }, 600);
}

function getBotReply(question) {
  const lower = question.toLowerCase();
  for (let key in agriFAQs) {
    if (lower.includes(key)) {
      return agriFAQs[key];
    }
  }
  return "🌾 Sorry, I don't have data for that yet. Try asking about crops, irrigation, fertilizers, or farming techniques.";
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
