// Chatbot Toggle
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');

chatbotToggle.addEventListener('click', () => {
  chatbotContainer.style.display = chatbotContainer.style.display === 'block' ? 'none' : 'block';
});

chatbotClose.addEventListener('click', () => {
  chatbotContainer.style.display = 'none';
});

// Chatbot Functionality (Basic Example)
const chatbotBody = document.getElementById('chatbot-body');
const chatbotInput = document.getElementById('chatbot-input');

chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
      chatbotBody.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
      chatbotInput.value = '';

      // Simulate a bot response
      setTimeout(() => {
        chatbotBody.innerHTML += `<p><strong>Bot:</strong> Thank you for your message! How can I assist you further?</p>`;
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
      }, 500);
    }
  }
});