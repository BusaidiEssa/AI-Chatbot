const express = require('express');
const axios = require('axios');
const router = express.Router();

const HF_API_TOKEN = process.env.HUGGINGFACE_API_KEY;
const MODEL_ID = 'HuggingFaceH4/zephyr-7b-beta';

router.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required' });

  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${MODEL_ID}`,
      {
        inputs: `<|system|>You are a helpful assistant.<|user|>${message}<|assistant|>`,
        parameters: {
          max_new_tokens: 200,
          temperature: 0.7,
          top_p: 0.9,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${HF_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const fullText = response.data?.[0]?.generated_text || '';
    const assistantIndex = fullText.indexOf('<|assistant|>');
    const generatedText = assistantIndex !== -1
      ? fullText.substring(assistantIndex + '<|assistant|>'.length).trim()
      : fullText.trim();

    res.json({ reply: generatedText || 'No reply generated.' });
  } catch (error) {
    console.error('Hugging Face API error:', error?.response?.data || error.message);
    res.status(500).send('Error communicating with Hugging Face');
  }
});

module.exports = router;
