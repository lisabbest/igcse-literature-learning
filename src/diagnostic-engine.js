import { literatureErrors } from './literature-engine.js';

const error = id => literatureErrors.find(item => item.id === id);

export function diagnoseAnalysis(response, context = {}) {
  const text = response.trim();
  const lower = text.toLowerCase();
  const findings = [];
  const strengths = [];

  if (!text) return { status:'empty', strengths:[], findings:[], nextTask:'Write one analytical sentence using the evidence.' };

  const mentionsWriter = /shakespeare|writer|playwright|poet|author|williams|lee/.test(lower);
  const analyticalVerb = /suggest|imply|present|portray|reveal|expose|emphas|convey|construct|highlight|reinforce/.test(lower);
  const methodLanguage = /metaphor|imagery|verb|noun|adjective|contrast|stage direction|irony|repetition|structure|dialogue/.test(lower);
  const effectLanguage = /audience|reader|therefore|which|because|creating|making|position|power|relationship|theme/.test(lower);
  const quoteFocus = context.focusWords?.some(word => lower.includes(word.toLowerCase()));

  if (mentionsWriter) strengths.push('writer-focused phrasing');
  else findings.push({...error('LIT-E06'), priority:'medium'});

  if (analyticalVerb) strengths.push('analytical interpretation');
  else findings.push({...error('LIT-E02'), priority:'high'});

  if (methodLanguage && !effectLanguage) findings.push({...error('LIT-E03'), priority:'high'});
  if (/interesting|effective|powerful|makes the reader want|shows that/.test(lower) && text.length < 180) findings.push({...error('LIT-E04'), priority:'high'});

  if (context.focusWords?.length) {
    if (quoteFocus) strengths.push('word-level textual focus');
    else findings.push({id:'SKILL-AO3-CONNOTATION',label:`Zoom into ${context.focusWords.map(w=>'“'+w+'”').join(' or ')}`,priority:'high'});
  }

  const primary = findings.find(f=>f.priority==='high') || findings[0] || null;
  return {
    status:'diagnosed',
    strengths,
    findings,
    primary,
    nextTask: primary ? nextTaskFor(primary.id, context) : 'Develop an alternative interpretation and connect the analysis back to the question.'
  };
}

function nextTaskFor(id, context){
  const tasks = {
    'LIT-E02':'Add one sentence explaining what the writer’s choice implies, not merely what happens.',
    'LIT-E03':'Complete: method → specific word → connotation → effect/meaning.',
    'LIT-E04':'Replace the generic effect with a precise interpretation of character, relationship, theme or audience response.',
    'LIT-E06':'Rewrite the sentence so the character is clearly presented as a construction of the writer.',
    'SKILL-AO3-CONNOTATION':`Analyse the connotations of ${context.focusWords?.[0] ? '“'+context.focusWords[0]+'”' : 'one significant word'}.`
  };
  return tasks[id] || 'Revise the response using the diagnostic feedback.';
}
