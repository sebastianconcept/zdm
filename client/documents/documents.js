

  Template.documents.documents = function(){
    return Documents.find({},{sort:{createdOn: -1}});
  }; 

  Template.documents.nameFeedback = function(){
    return Session.get("nameFeedback");
  }; 


  Template.documents.addDocument = function(){
      var theName=$('.documentName').val();
      if(
        DocumentContentValidator.isValid(theName)){
        Document.insert({
          createdOn: Date.now(),
          autor: Meteor.user()._id,
          name: theName,
        });
        $('.documentName').val("");
      };
  }; 


  Template.documents.events({
    'click #addDocument': function(){
      Template.documents.addDocument();
    },
  });

DocumentContentValidator = {
    clear: function(){
      return Session.set("nameFeedback",undefined);
    },
    setFeedback: function(aString){
      return Session.set("nameFeedback",aString);
    },
    isValid: function(aString){
      this.clear();
      if(aString.length==0){
        this.setFeedback("The name can't be empty");
        return false;
      } else if (this.findWithName(aString)){
        this.setFeedback("A document with that name already exists");
        return false;
      } else { return true; }
    },
    findWithName: function(aString){
      return Document.findOne({name: aString});
    }
  };

