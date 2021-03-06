Template.postSubmit.events({
 'submit form': function(e) {
    e.preventDefault();
    var post = {
      url: $(e.target).find('[name=url]').val(), 
      title: $(e.target).find('[name=title]').val()
    };
    Meteor.call('postInsert', post, function( err, res){
      if(err){
        return alert(error.reason);
      }
      post._id = Posts.insert(post);
      Router.go('postPage', post);
    });
  } 
})
