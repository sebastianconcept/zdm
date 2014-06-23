

  Template.sections.sections = function(){
    return Sections.find({},{sort:{createdOn: -1}});
  }; 

  Template.sections.nameFeedback = function(){
    return Session.get("sectionNameFeedback");
  }; 

  Template.sections.addNewSection = function(){
      var theName = $('.newSectionName').val();
      if(
        SectionNameValidator.isValid(theName)){
        Sections.insert({
          createdOn: Date.now(),
          autor: Meteor.user()._id,
          name: theName
        });
        $('.newSectionName').val("");
      };
  }; 

  Template.sections.events({
    'click .addNewSection': function(){
      Template.sections.addNewSection();
    },
  });

  SectionNameValidator = {
    clear: function(){
      return Session.set("sectionNameFeedback",undefined);
    },
    setFeedback: function(aString){
      return Session.set("sectionNameFeedback",aString);
    },
    isValid: function(aString){
      this.clear();
      if(aString.length==0){
        this.setFeedback("Sorry, the section name can't be empty");
        return false;
      } else { return true; }
    },
  };


