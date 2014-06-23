 Template.section.created = function() {
    // which sections are in edit mode? default: none
    Session.set('sectionEditors',[]);
  };

  // answers true if the section with aSectionId
  // is in edit mode
  Template.section.isEditing = function(){
    return Session.get('sectionEditors').indexOf(this._id)!= -1
  }; 

  // Adds the section's id to the ones in edit mode
  Template.section.edit = function(aSection){
    if(aSection != null &&
      (Session.get('sectionEditors').indexOf(aSection._id)== -1)) {
        var editing = Session.get('sectionEditors');
        editing.push(aSection._id);
        Session.set('sectionEditors',editing);
      };
  };

  Template.section.saveSection = function(aSection, aTemplate){
    aSection.name = aTemplate.find('.sectionName').value;
    Sections.update(aSection._id,aSection);
    var editing = Session.get('sectionEditors');
    editing.splice(editing.indexOf(aSection._id),1);
    Session.set('sectionEditors',editing);
  }; 

  Template.section.removeSection = function(aSection){
    Sections.remove(aSection._id);
  }; 


Template.section.events({
  'click .editSection': function(){
    Template.section.edit(this);
  },
  'click .saveSection': function(anEvent, aTemplate){
    Template.section.saveSection(this, aTemplate);
  },
  'click .removeSection': function(){
    Template.section.removeSection(this);
  }
});