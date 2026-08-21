export const assessmentObjectives = {
  AO1: { name: 'Textual Knowledge', skills: ['plotEvents','characters','relationships','themes','setting','quoteRecall','quoteAccuracy','evidenceRelevance'] },
  AO2: { name: 'Understanding & Interpretation', skills: ['explicitMeaning','implicitMeaning','characterMotivation','characterDevelopment','relationshipDynamics','themeDevelopment','significance','wholeTextConnections'] },
  AO3: { name: "Writer's Methods", skills: ['diction','imagery','figurativeLanguage','connotation','tone','sound','contrast','repetition','juxtaposition','foreshadowing','stageDirections','dialogue','dramaticIrony','form'] },
  AO4: { name: 'Informed Personal Response', skills: ['interpretation','judgement','emotionalResponse','evaluation','alternativeInterpretation','authorialPurpose','conceptualArgument'] }
};

export const writingSkills = {
  thesis: ['answersQuestion','conceptualArgument','writerFocused'],
  topicSentence: ['argumentative','specific','linksToQuestion'],
  evidence: ['relevant','precise','embedded','sufficient'],
  analysis: ['methodIdentification','connotation','effect','interpretation','writerIntention'],
  development: ['zoomIn','alternativeInterpretation','wholeTextConnection','conceptualDepth'],
  expression: ['analyticalVerbs','academicVocabulary','sentenceControl','cohesion','concision']
};

export const literatureErrors = [
 ['LIT-E01','Plot retelling'],['LIT-E02','Evidence without analysis'],['LIT-E03','Technique spotting'],['LIT-E04','Generic effect'],['LIT-E05','Paraphrasing quotation'],['LIT-E06','Writer not mentioned'],['LIT-E07','Weak textual evidence'],['LIT-E08','Unsupported interpretation'],['LIT-E09','Context dumping'],['LIT-E10','Question drift'],['LIT-E11','Repetitive analysis'],['LIT-E12','No whole-text connection'],['LIT-E13','Feature without effect'],['LIT-E14','Character treated as real person'],['LIT-E15','Generic introduction'],['LIT-E16','Narrative topic sentence'],['LIT-E17','Overlong quotation'],['LIT-E18','Unintegrated quotation'],['LIT-E19','Weak personal response'],['LIT-E20','Conclusion repeats thesis']
].map(([id,label])=>({id,label}));

export const contentSchema = {
  examBoard: 'CAIE', syllabusCode: '0475', syllabusYear: 2026,
  fields: ['id','text','author','literaryForm','location','characters','themes','methods','quotation','analysis','difficulty','skillTargets','assessmentObjectives','sourceType','rightsStatus']
};

export function recommendNext(profile){
  const entries=Object.entries(profile);
  if(!entries.length) return null;
  const [skill,score]=entries.sort((a,b)=>a[1]-b[1])[0];
  return {skill,score,principle:'Target the weakest demonstrated skill with a short task before another full essay.'};
}
