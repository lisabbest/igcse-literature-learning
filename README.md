# Lisa Bui IGCSE Literature

A diagnostic + adaptive learning platform for Cambridge IGCSE Literature (0475).

## North Star
How accurately can the platform understand why a student is losing Literature marks and determine what they should practise next?

## V1
- Student dashboard
- Learn hub
- Quote Lab
- Analysis Builder
- Essay Diagnostic prototype
- AO profile / progress view
- AO1–AO4 taxonomy
- Writing-skill taxonomy
- LIT-E01–LIT-E20 error taxonomy
- Rights-aware content schema

## Architecture
Learning/assessment logic is kept separate from text content. Set texts are replaceable content layers; diagnostic logic should remain reusable across prose, poetry, drama and unseen work.

## First validation text
A Midsummer Night's Dream — William Shakespeare.

## Product principle
Do not reward technique spotting alone. Diagnose the chain from textual evidence → writer's choice → close analysis → interpretation → response to the question.

## Current status
V1 interactive front-end prototype is in `index.html`. Taxonomy/engine primitives are in `src/literature-engine.js`.
