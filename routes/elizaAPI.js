const express = require('express');
const router = express.Router();

const helper = require('../helpers/eliza')
router.post('/post', function(req, res, next) {
      let newMessage = helper(req.body.message)
      res.json({isEliza:true,content: newMessage })
});

router.get('/get',function (req,res,next) {
  
  let initialMessages = ['Hi there, welcome to my office. I am here to chat about anything. What is on your mind?', 
  'How do you do. Please tell me your problem.','Please tell me what is been bothering you.', 
  'Is something troubling you?', 
  'Hello. How are you doing today?'
];
  var initialMessage = initialMessages[Math.floor(Math.random()*initialMessages.length)];
	
  res.send({isEliza:true,content: initialMessage })
  

})

module.exports = router;