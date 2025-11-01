const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Handle form submission logic here
  console.log('Received contact form submission:', { name, email, message });
  res.status(200).json({ message: 'Message sent successfully!' });
});

app.post('/api/chatbot', (req, res) => {
  const { message } = req.body;
  // AI chatbot logic placeholder
  const reply = `You said: "${message}". I'm a simple chatbot. How can I help you?`;
  res.status(200).json({ reply });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
