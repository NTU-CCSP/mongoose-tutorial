

// Require models
var mongoose = require('mongoose');
var User = mongoose.model('User');


/*
 * GET users listing.
 */
exports.list = function(req, res){

  User.find(function (err, users, count){
    if(err){
      console.error(err);
      res.json({error: err.name}, 500);
    };

    res.json({users: users});
  });
  
};


/*
 * POST users create.
 */
exports.create = function(req, res){

  var user = new User(req.body);
  user.save(function (err, newUser){
    if(err){
      console.error(err);
      res.json({error: err.name}, 500);
    };

    res.json(newUser);
  });

};


/*
 * GET users show.
 */
exports.show = function(req, res){

  User.findById( req.params.id, function (err, user){
    if(err){
      console.error(err);
      res.json({error: err.name}, 500);
    };

    res.json(user);
  });
  
};


/*
 * POST users update.
 */
exports.update = function(req, res){

  User.findById( req.params.id, function (err, user){
    if(err){
      console.error(err);
      res.json({error: err.name}, 500);
    };

    user.name = req.body.name;
    user.updated = Date.now();

    user.save( function(err, updatedUser){
      if(err){
        console.error(err);
        res.json({error: err.name}, 500);
      };
      res.json(updatedUser);
    }); 
  });

};


/*
 * DELETE users destroy.
 */
exports.destroy = function(req, res){

  User.findById( req.params.id, function (err, user){
    if(err){
      console.error(err);
      res.json({error: err.name}, 500);
    };

    user.remove( function(err, removedUser){
      if(err){
        console.error(err);
        res.json({error: err.name}, 500);
      };
      res.json(removedUser);
    });
  });

};







