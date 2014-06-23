

  Template.questions.questions = function(){
    return Questions.find({},{sort:{createdOn: -1}});
  }; 

  Template.questions.labelFeedback = function(){
    return Session.get("questionLabelFeedback");
  }; 

  Template.questions.contentFeedback = function(){
    return Session.get("questionContentFeedback");
  }; 


  Template.questions.addQuestion = function(){
      var theLabel=$('.questionLabel').first().val();
      var theContent=$('.questionContent').first().val();
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
    'click #addQuestion': function(){
      Template.questions.addQuestion();
    },
  });

QuestionLabelValidator = {
    clear: function(){
      return Session.set("questionLabelFeedback",undefined);
    },
    setFeedback: function(aString){
      return Session.set("questionLabelFeedback",aString);
    },
    isValid: function(aString){
      this.clear();
      if(aString.length==0){
        this.setFeedback("Sorry, the question label can't be empty");
        return false;
      } else { return true; }
    },
  };

QuestionContentValidator = {
    clear: function(){
      return Session.set("questionContentFeedback",undefined);
    },
    setFeedback: function(aString){
      return Session.set("questionContentFeedback",aString);
    },
    isValid: function(aString){
      this.clear();
      if(aString.length==0){
        this.setFeedback("Sorry, the question content can't be empty");
        return false;
      } else if (this.findWithContent(aString)){
        this.setFeedback("Sorry, a question with that content already exists");
        return false;
      } else { return true; }

    },
    findWithContent: function(aString){
      return Questions.findOne({content: aString});
    }
  };
