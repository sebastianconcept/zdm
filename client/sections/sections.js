

  Template.sections.sections = function(){
    return Sections.find({},{sort:{createdOn: -1}});
  }; 

  Template.sections.nameFeedback = function(){
    return Session.get("sectionNameFeedback");
  }; 

  Template.sections.addSection = function(){
      var theName=$('.sectionName').val();
      if(
        SectionNameValidator.isValid(theName)){
        Sections.insert({
          createdOn: Date.now(),
          autor: Meteor.user()._id,
          name: theName
        });
        $('.sectionName').val("");
      };
  }; 

  Template.sections.events({
    'click .addSection': function(){
      Template.sections.addSection();
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


