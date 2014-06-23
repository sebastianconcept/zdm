
  Template.questionsInSection.created = function() {
    //console.log(this);
    //console.log(this.find('.questionToAdd'));
  };

  Template.questionsInSection.questions = function(){
    return Questions.find().fetch().map(function(it){return it.content; });
  }; 

  Template.questionsInSection.addQuetion = function(aSection,aTemplate){
    console.log('on add question to section');
    console.log(aSection);
  }; 

  Template.questionsInSection.removeSection = function(aSection,aTemplate){
    console.log('on remove question from section');
  }; 

  Template.questionsInSection.events({
    'click .removeQuestion': function(anEvent, aTemplate){
      Template.questionsInSection.removeSection(this,aTemplate);
    },
    'click .addQuestion': function(anEvent, aTemplate){
      Template.questionsInSection.addQuestion(this,aTemplate);
    }
  });
  