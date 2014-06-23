
  Template.sectionsInDocument.created = function() {
    // initialization
    // no-op
  };

  Template.sectionsInDocument.findSectionsIn = function(aDocument){
    aDocument.sections = aDocument.sections || [];
    return aDocument.sections.map(function(each){
      return Sections.findOne({name:each});
    });
  };

  Template.sectionsInDocument.sectionNames = function(){
    return Sections.find().fetch().map(function(it){return it.name; });
  };

  Template.sectionsInDocument.sections = function(){
    return Template.sectionsInDocument.findSectionsIn(this);
  };

  Template.sectionsInDocument.addSection = function(aDocument,aTemplate){
    aDocument.sections = aDocument.sections || [];
    var theSectionName = aTemplate.find('.typeahead').value;

    aDocument.sections.push(theSectionName);
    Documents.update(aDocument._id,aDocument);;
    aTemplate.find('.typeahead').value="";
 }; 

  Template.sectionsInDocument.removeSection = function(aSection,aTemplate){
    aTemplate.data.sections.splice(aTemplate.data.sections.indexOf(aSection.name),1);
    Documents.update(aTemplate.data._id,aTemplate.data);
  }; 

  Template.sectionsInDocument.events({
    'click .removeSection': function(anEvent, aTemplate){
      Template.sectionsInDocument.removeSection(this,aTemplate);
    },
    'click .addSection': function(anEvent, aTemplate){
      Template.sectionsInDocument.addSection(this,aTemplate);
    }
  });
  