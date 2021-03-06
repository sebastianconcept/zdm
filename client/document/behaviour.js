 Template.document.created = function() {
    // which document are in edit mode? default: none
    Session.set('documentEditors',[]);
  };

  // answers true if the document with aDocumentId
  // is in edit mode
  Template.document.isEditing = function(){
    return Session.get('documentEditors').indexOf(this._id)!= -1
  }; 

  // Adds the document's id to the ones in edit mode
  Template.document.edit = function(aDocument){
    if(aDocument != null &&
      (Session.get('documentEditors').indexOf(aDocument._id)== -1)) {
        var editing = Session.get('documentEditors');
        editing.push(aDocument._id);
        Session.set('documentEditors',editing);
        setTimeout(function(){Meteor.typeahead.inject()},100);
      };
  };

  Template.document.saveDocument = function(aDocument, aTemplate){
    aDocument.name = aTemplate.find('.documentName').value;
    Documents.update(aDocument._id,aDocument);
    var editing = Session.get('documentEditors');
    editing.splice(editing.indexOf(aDocument._id),1);
    Session.set('documentEditors',editing);
  }; 

  Template.document.destroyDocument = function(aDocument){
    Documents.remove(aDocument._id);
  }; 

Template.document.events({
  'click .editDocument': function(){
    Template.document.edit(this);
  },
  'click .saveDocument': function(anEvent, aTemplate){
    Template.document.saveDocument(this, aTemplate);
  },
  'click .destroyDocument': function(){
    Template.document.destroyDocument(this);
  }
});