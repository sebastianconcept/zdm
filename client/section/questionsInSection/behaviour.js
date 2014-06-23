
  Template.questionsInSection.created = function() {
    //console.log(this);
    //console.log(this.find('.questionToAdd'));
  };

  Template.questionsInSection.findQuestionsIn = function(aSection){
    aSection.questions = aSection.questions || [];
    return aSection.questions.map(function(each){
      return Questions.findOne({content:each});
    });
  };

  Template.questionsInSection.questionsContent = function(){
    return Questions.find().fetch().map(function(it){return it.content; });
  }; 

  Template.questionsInSection.questions = function(){
    return Template.questionsInSection.findQuestionsIn(this);
  }; 

  Template.questionsInSection.addQuestion = function(aSection,aTemplate){
    aSection.questions = aSection.questions || [];
    var theQuestionName = aTemplate.find('.typeahead').value;

    aSection.questions.push(theQuestionName);
    Sections.update(aSection._id,aSection);;
  }; 

  Template.questionsInSection.removeQuestion = function(aQuestion,aTemplate){
    aTemplate.data.questions.splice(aTemplate.data.questions.indexOf(aQuestion.content),1);
    Sections.update(aTemplate.data._id,aTemplate.data);
  }; 

  Template.questionsInSection.events({
    'click .removeQuestion': function(anEvent, aTemplate){
      Template.questionsInSection.removeQuestion(this,aTemplate);
    },
    'click .addQuestion': function(anEvent, aTemplate){
      Template.questionsInSection.addQuestion(this,aTemplate);
    }
  });
  