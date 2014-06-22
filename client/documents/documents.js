

  Template.documents.documents = function(){
    return Documents.find({},{sort:{createdOn: -1}});
  }; 

  Template.documents.nameFeedback = function(){
    return Session.get("documentNameFeedback");
  }; 


  Template.documents.addDocument = function(){
      var theName=$('.documentName').val();
      if(
        DocumentNameValidator.isValid(theName)){
        Documents.insert({
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

DocumentNameValidator = {
    clear: function(){
      return Session.set("documentNameFeedback",undefined);
    },
    setFeedback: function(aString){
      return Session.set("documentNameFeedback",aString);
    },
    isValid: function(aString){
      this.clear();
      if(aString.length==0){
        this.setFeedback("Sorry, the document name can't be empty");
        return false;
      } else if (this.findWithName(aString)){
        this.setFeedback("Sorry, there is already a document with that name");
        return false;
      } else { return true; }
    },
    findWithName: function(aString){
      return Documents.findOne({name: aString});
    }
  };

