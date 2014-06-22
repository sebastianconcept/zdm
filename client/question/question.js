 Template.question.created = function() {
    // which questions are in edit mode? default: none
    Template.question.editors=[];
    Template.question.selectedQuestion=null;
  };

  // answers true if the question with aQuestionId
  // is in edit mode
  Template.question.isEditing = function(aQuestionId){
    return this.editors.indexOf(aQuestionId)!= -1;
  }; 

  // Sets the question with aQuestionId in edit mode
  Template.question.edit = function(aQuestionId){
    if(
      (Template.question.editors.indexOf(aQuestionId)== -1) &&
      aQuestionId != null) {
      this.editors.push(aQuestionId)};
    console.log(this.editors);
  };

  Template.question.removeQuestion = function(){
    var toRemove=Template.question.selectedQuestion;
    Questions.remove(toRemove);
}; 


Template.question.events({
  'click li': function(){
    console.log(this._id);
    Template.question.selectedQuestion=this._id;
  },
  'click #editQuestion': function(){
    Template.question.edit(Template.question.selectedQuestion);
  },
  'click #removeQuestion': function(){
    Template.question.removeQuestion();
  }
});