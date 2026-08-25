export const midsummer = {
  id: 'amnd',
  title: "A Midsummer Night's Dream",
  author: 'William Shakespeare',
  literaryForm: 'Drama',
  examBoard: 'CAIE',
  syllabusCode: '0475',
  syllabusYear: 2026,
  sourceType: 'teacher-authored-learning-data',
  rightsStatus: 'review-before-publication',
  themes: [
    {id:'love',name:'Love and its difficulties',concept:'Love is presented as irrational, unstable and capable of creating unequal power relationships.'},
    {id:'illusion',name:'Appearance, illusion and transformation',concept:'The play repeatedly unsettles the boundary between reality and illusion.'},
    {id:'power',name:'Power and control',concept:'Romantic, parental and magical relationships expose struggles over control.'},
    {id:'gender',name:'Gender and social expectations',concept:'Relationships reveal expectations surrounding obedience, pursuit and authority.'}
  ],
  quotes: [
    {
      id:'amnd-q001',
      quotation:'I am your spaniel…',
      speaker:'Helena',
      location:'Act 2',
      themes:['love','power','gender'],
      methods:['metaphor','animal imagery'],
      ao:['AO1','AO2','AO3','AO4'],
      masteryStages:['recognition','context','meaning','method','application','analysis'],
      learningPrompt:'What does the noun “spaniel” imply about Helena’s position in the relationship?',
      diagnosticTargets:['connotation','relationshipDynamics','effect','conceptualArgument']
    },
    {
      id:'amnd-q002',
      quotation:'The course of true love never did run smooth.',
      speaker:'Lysander',
      location:'Act 1',
      themes:['love'],
      methods:['metaphor','aphoristic statement'],
      ao:['AO1','AO2','AO3','AO4'],
      masteryStages:['recognition','context','meaning','method','application','analysis'],
      learningPrompt:'How does the metaphor of a “course” shape the play’s presentation of love?',
      diagnosticTargets:['figurativeLanguage','themeDevelopment','wholeTextConnections']
    }
  ]
};
