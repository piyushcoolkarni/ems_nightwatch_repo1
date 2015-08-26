var EMSproj=require('../models/employee');
var express = require('express');
var router = express.Router();



router.route('/employees')  //change here

   .get(function(req, res) {
  EMSproj.find({},function(err,data)
	   {
       if(err){console.log("Error "+err);}
	   else{res.send(data);}
       })
	   
})


   
    .post(function(req, res ) {

var proj = new EMSproj(req.body);
   proj.code = req.body.code;
   proj.name = req.body.name,
   proj.city = req.body.city
   

      
   proj.save(function(err,data) {
    if (err) {
      return res.send(err);
    }
 
    res.send({ message: 'Data Added'});
   

  });

  
});




router.route('/employees/:id')
.put(function(req,res){
EMSproj.findOne({ _id: req.params.id }, function(err,proj) {
  
//var proj = new EMSproj(req.body);
   proj.code = req.body.code;
   proj.name = req.body.name,
   proj.city = req.body.city
   
   
		 proj.save(function(err) {
      if (err) {
        return res.send(err);
		
                }
        else
		{ 
              res.json({ message: 'employee updated!' });
		}   
    });
  });
  //res.end();
  
})
  



router.route('/employees/:id')
.delete(function(req, res) {
  EMSproj.remove({
    _id: req.params.id
  }, function(err) {
    if (err) {
      return res.send(err);
    }
 
    res.json({ message: 'Successfully deleted' });
  });
  
});


  
router.route('/employees/:id')
.get(function(req, res) {
  EMSproj.findOne({ _id: req.params.id }, function(err,emp) {
      if (err) {
	  // insert correct status code	
      return res.send(err);
    } 
	console.log("/employees : JSON response body : " + emp);
    res.json(emp);
	res.end();
  });
})
  
  
   
   



module.exports = router;
