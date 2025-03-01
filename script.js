// Toggle Chatbot
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotClose = document.getElementById('chatbot-close');

chatbotToggle.addEventListener('click', () => {
  chatbotContainer.style.display = chatbotContainer.style.display === 'block' ? 'none' : 'block';
});

chatbotClose.addEventListener('click', () => {
  chatbotContainer.style.display = 'none';
});