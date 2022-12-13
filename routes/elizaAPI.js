const express = require('express');
const router = express.Router();

const eliza = require('../helpers/eliza')

router.post('/post', (req, res) => {
      let newMessage = eliza(req.body)
      res.json(newMessage)
});

router.get('/get',(req, res, next) => {
  let initialMessages = ['Hi there, welcome to my office. I am here to chat about anything. What is on your mind?', 
  'How do you do. Please tell me your problem.','Please tell me what is been bothering you.', 
  'Is something troubling you?', 
  'Hello. How are you doing today?'
];
  let initialMessage = initialMessages[Math.floor(Math.random()*initialMessages.length)];
  
  res.status(200).send({ isEliza: true, content: initialMessage })
})

module.exports = router;