 Template.question.created = function() {
    // which questions are in edit mode? default: none
    Template.question.editors=[];
  };

  // answers true if the question with aQuestionId
  // is in edit mode
  Template.question.isEditing = function(){
    console.log(Session.get('questionEditors'));
    //return Template.question.editors.indexOf(this._id)!= -1;
    return Session.get('questionEditors').indexOf(this._id)!= -1;
  }; 

  // Adds the question's id to the ones in edit mode
  Template.question.edit = function(aQuestion){
    if(aQuestion != null &&
      (Template.question.editors.indexOf(aQuestion._id)== -1)) {
      this.editors.push(aQuestion._id)};
    console.log(this);
    this.render();
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