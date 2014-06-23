zdm
===

A Meteor based experiment measuring *features output rate*

# Developing sessions

## 1. Duration: 6h30m, output: 

- from initial commit to adding questions

## 2. Duration: 5h29m, output: 

- learn how-to and made dynamic template rendering work (view/edit in item’s list)
- implemented CRUD for questions
- implemented CRUD for sections
- implemented CRUD for documents


## 3. Duration: 4h18m, output:

- implemented fields in editors for questions
- implemented fields in editors for sections
- implemented fields in editors for documents
- implemented typeahead for questions in sections

## 4. Duration: 1h53m, output:

- fixed typeahead source of questions for editing sections

## 5. Duration: 1h21m, output:

- documents can add and remove its sections when they are in edit mode

## 6. Duration: 21m, output:

- sections can be nested into sections 
- tag: zdmExperimentFinished

## Metrics

- Total experiment duration 19 hours and 52 minutes
- 9 feature branches
- 1 developer
- sessions spread over 3 days
- 5 support interactions in IRC channel
- basic (incomplete) validations
- no added CSS
- no added security
- CRUD consistency for all the models
- 475 lines of code total

## Detailed lines of code

    $ find . -name '*.js' | xargs wc -l
    ...
      44 ./client/document/behaviour.js
      43 ./client/document/sectionsInDocument/behaviour.js
      52 ./client/documents/documents.js
       5 ./client/navbar.js
      50 ./client/question/behaviour.js
      77 ./client/questions/questions.js
      47 ./client/section/behaviour.js
      43 ./client/section/questionsInSection/behaviour.js
      41 ./client/section/sectionsInSection/behaviour.js
      46 ./client/sections/sections.js
       4 ./client/startup.js
      15 ./common/app.js
       1 ./common/collections/documents.js
       1 ./common/collections/questions.js
       1 ./common/collections/sections.js
       5 ./server/startup.js