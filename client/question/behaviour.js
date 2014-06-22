 Template.question.created = function() {
    // which questions are in edit mode? default: none
    Session.set('questionEditors',[]);

    // using ReactiveDic for editor states as described:
    // https://atmospherejs.com/package/reactive-dict-bind
    //Template.question.editors = new ReactiveDict;
    //dictBind(Template.question);
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
    //console.log(aQuestion);
    Questions.update(aQuestion._id,aQuestion);
    var editing = Session.get('questionEditors');
    editing.splice(editing.indexOf(aQuestion._id),1);
    Session.set('questionEditors',editing);
  }; 

  Template.question.removeQuestion = function(aQuestion){
    Questions.remove(aQuestion._id);
  }; 


Template.question.events({
  'click .editQuestion': function(){
    Template.question.edit(this);
  },
  'click .saveQuestion': function(){
    Template.question.saveQuestion(this);
  },
  'click .removeQuestion': function(){
    Template.question.removeQuestion(this);
  }
});