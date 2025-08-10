const chatContainer = document.createElement('div');
chatContainer.style.width = '300px';
chatContainer.style.border = '1px solid #ccc';
chatContainer.style.padding = '10px';
chatContainer.style.fontFamily = 'Arial, sans-serif';

const messagesDiv = document.createElement('div');
messagesDiv.style.height = '200px';
messagesDiv.style.overflowY = 'auto';
messagesDiv.style.marginBottom = '10px';
chatContainer.appendChild(messagesDiv);

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Type a message...';
input.style.width = '80%';
chatContainer.appendChild(input);

const sendBtn = document.createElement('button');
sendBtn.textContent = 'Send';
sendBtn.style.width = '18%';
sendBtn.style.marginLeft = '2%';
chatContainer.appendChild(sendBtn);

document.body.appendChild(chatContainer);

function addMessage(text, sender = 'You') {
    const msg = document.createElement('div');
    msg.textContent = `${sender}: ${text}`;
    messagesDiv.appendChild(msg);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

sendBtn.onclick = () => {
    const text = input.value.trim();
    if (text) {
        addMessage(text);
        input.value = '';
    }
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendBtn.onclick();
});