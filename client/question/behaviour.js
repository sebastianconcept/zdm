 Template.question.created = function() {
    // which questions are in edit mode? default: none
    Session.set('questionEditors',[]);

    //Template.question.editing = false;


    // using ReactiveDic for editor states as described:
    // https://atmospherejs.com/package/reactive-dict-bind
    //Template.question.editors = new ReactiveDict;
    //dictBind(Template.question);
  };

  // answers true if the question with aQuestionId
  // is in edit mode
  Template.question.isEditing = function(){
    //console.log(Session.get('questionEditors'));
    //return Template.question.editors.indexOf(this._id)!= -1;
    //return Session.get('questionEditors').indexOf(this._id)!= -1;
    //return Template.question.editing;
    //return Session.get('isEditing');
    return Session.get('questionEditors').indexOf(this._id)!= -1
  }; 

  // Adds the question's id to the ones in edit mode
  Template.question.edit = function(aQuestion){
    if(aQuestion != null &&
      (Session.get('questionEditors').indexOf(aQuestion._id)== -1)) {
        //Template.question.editing = true;
        //Session.set('isEditing',true);
        //Session.get('questionEditors').push(aQuestion._id)
        var editing = Session.get('questionEditors');
        editing.push(aQuestion._id);
        Session.set('questionEditors',editing);
      };
    //console.log(Session.get('questionEditors'));
    //console.log(this);
    //Template.question.reset();
  };

  Template.question.removeQuestion = function(aQuestion){
    Questions.remove(aQuestion._id);
}; 


Template.question.events({
  'click li': function(){
    //Template.question.selectedQuestion=this._id;
    //console.log(Template.question.selectedQuestion);
  },
  'click .editQuestion': function(){
    Template.question.edit(this);
  },
  'click .removeQuestion': function(){
    Template.question.removeQuestion(this);
  }
});