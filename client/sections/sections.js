

  Template.sections.sections = function(){
    return Sections.find({},{sort:{createdOn: -1}});
  }; 

  Template.sections.nameFeedback = function(){
    return Session.get("sectionNameFeedback");
  }; 

  Template.sections.addSection = function(){
      var theName=$('.sectionName').val();
      if(
        QuestionLabelValidator.isValid(theLabel)&&
        QuestionContentValidator.isValid(theContent)){
        Questions.insert({
          createdOn: Date.now(),
          autor: Meteor.user()._id,
          label: theLabel,
          content: theContent
        });
        $('.questionLabel').val("");
        $('.questionContent').val("");
      };
  }; 


  Template.questions.events({
    'click .addQuestion': function(){
      Template.questions.addQuestion();
    },
  });

QuestionLabelValidator = {
    clear: function(){
      return Session.set("labelFeedback",undefined);
    },
    setFeedback: function(aString){
      return Session.set("labelFeedback",aString);
    },
    isValid: function(aString){
      this.clear();
      if(aString.length==0){
        this.setFeedback("The label can't be empty");
        return false;
      } else { return true; }
    },
  };

QuestionContentValidator = {
    clear: function(){
      return Session.set("contentFeedback",undefined);
    },
    setFeedback: function(aString){
      return Session.set("contentFeedback",aString);
    },
    isValid: function(aString){
      this.clear();
      if(aString.length==0){
        this.setFeedback("The question can't be empty");
        return false;
      } else if (this.findWithContent(aString)){
        this.setFeedback("That question already exists");
        return false;
      } else { return true; }

    },
    findWithContent: function(aString){
      return Questions.findOne({content: aString});
    }
  };

