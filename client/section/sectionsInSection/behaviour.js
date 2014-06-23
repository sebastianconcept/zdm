
  Template.sectionsInSection.created = function() {
  };

  Template.sectionsInSection.findSectionsIn = function(aSection){
    aSection.sections = aSection.sections || [];
    return aSection.sections.map(function(each){
      return Sections.findOne({name:each});
    });
  };  

  Template.sectionsInSection.sectionNames = function(){
    return Sections.find().fetch().map(function(it){return it.name; });
  }; 

  Template.sectionsInSection.sections = function(){
    return Template.sectionsInSection.findSectionsIn(this);
  };  

  Template.sectionsInSection.addSection = function(aSection,aTemplate){
    aSection.sections = aSection.sections || [];
    var theSectionName = aTemplate.find('.typeahead').value;

    aSection.sections.push(theSectionName);
    Sections.update(aSection._id,aSection);
    aTemplate.find('.typeahead').value="";
  }; 

  Template.sectionsInSection.removeSection = function(aSection,aTemplate){
    aTemplate.data.sections.splice(aTemplate.data.sections.indexOf(aSection.name),1);
    Sections.update(aTemplate.data._id,aTemplate.data);
  }; 

  Template.sectionsInSection.events({
    'click .removeSection': function(anEvent, aTemplate){
      Template.sectionsInSection.removeSection(this,aTemplate);
    },
    'click .addSection': function(anEvent, aTemplate){
      Template.sectionsInSection.addSection(this,aTemplate);
    }
  });
  