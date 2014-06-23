
  Template.questionsInSection.created = function() {
    //console.log(this);
    //console.log(this.find('.questionToAdd'));
  };

  Template.questionsInSection.findQuestions = function(){
    //console.log(this);
    return Questions.find().fetch();
  };

  Template.questionsInSection.questionsContent = function(){
    return Questions.find().fetch().map(function(it){return it.content; });
  }; 

  Template.questionsInSection.questions = function(){
    return Template.questionsInSection.findQuestions();
  }; 

  Template.questionsInSection.addQuestion = function(aSection,aTemplate){
    if(!aSection.questions){aSection.questions = []};
    var theQuestionName = aTemplate.find('.typeahead').value;

    aSection.questions.push(theQuestionName);
    Sections.update(aSection._id,aSection);;
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
  