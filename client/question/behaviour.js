 Template.question.created = function() {
    // which questions are in edit mode? default: none
    Session.set('questionEditors',[]);
    var bindings = new ReactiveDict;
    dictBind(Template.question);
  };

  // answers true if the question with aQuestionId
  // is in edit mode
  Template.question.isEditing = function(){
    return Session.get('questionEditors').indexOf(this._id)!= -1
  }; 

  // Adds the question's id to the ones in edit mode
  Template.question.edit = function(aQuestion){
    if(aQuestion != null &&
      (Session.get('questionEditors').indexOf(aQuestion._id)== -1)) {
        var editing = Session.get('questionEditors');
        editing.push(aQuestion._id);
        Session.set('questionEditors',editing);
      };
  };

  Template.question.saveQuestion = function(aQuestion){
    console.log(aQuestion);
    console.log(this);
    Questions.update(aQuestion._id,aQuestion);
    var editing = Session.get('questionEditors');
    editing.splice(editing.indexOf(aQuestion._id),1);
    Session.set('questionEditors',editing);
  }; 

  Template.question.removeQuestion = function(aQuestion){
    Questions.remove(aQuestion._id);
  }; 

Template.question.content = function(){

    return Session.get();
  }; 


Template.question.events({
  'click .editQuestion': function(){
    Template.question.edit(this);
  },
  'click .saveQuestion': function(){
    console.log(this);
    Template.question.saveQuestion(this);
  },
  'click .removeQuestion': function(){
    Template.question.removeQuestion(this);
  }
});