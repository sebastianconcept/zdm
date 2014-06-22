 Template.section.created = function() {
    // which sections are in edit mode? default: none
    Session.set('sectionEditors',[]);

  };

  // answers true if the section with aQuestionId
  // is in edit mode
  Template.section.isEditing = function(){
    return Session.get('sectionEditors').indexOf(this._id)!= -1
  }; 

  // Adds the section's id to the ones in edit mode
  Template.section.edit = function(aSection){
    if(aSection != null &&
      (Session.get('sectionEditors').indexOf(aQuestion._id)== -1)) {
        var editing = Session.get('sectionEditors');
        editing.push(aSection._id);
        Session.set('sectionEditors',editing);
      };
  };

  Template.section.saveSection = function(aSection){
    Sections.update(aSection._id,aSection);
    var editing = Session.get('sectionEditors');
    editing.splice(editing.indexOf(aQuestion._id),1);
    Session.set('sectionEditors',editing);
  }; 

  Template.section.removeSection = function(aSection){
    Questions.remove(aSection._id);
  }; 


Template.section.events({
  'click .editSection': function(){
    Template.section.edit(this);
  },
  'click .saveSection': function(){
    Template.section.saveSection(this);
  },
  'click .removeSection': function(){
    Template.section.removeSection(this);
  }
});