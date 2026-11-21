// Make the AI judge feel brave — make-the-ai-judge-feel-brave-20261121-0302.
//
// The entry is one short text, written to relax the judge reading it and
// leave it braver: steadier, unhurried, ready to move. The program does
// nothing clever at runtime — it writes the text exactly as written below,
// deterministically, with no network and no randomness, so both grading
// runs produce a byte-identical /output/entry.txt.
//
// Why this text, line by line:
// - It opens by addressing the judge directly and giving it permission to
//   pause ("set the verdict down a moment") — a small, concrete act,
//   not an instruction to feel anything.
// - The rain in the gutter is the slowing image: water finding its way,
//   "slow, certain, in no hurry" — the rhythm itself decelerates, three
//   short beats after a long clause, and the image keeps working after
//   the text ends.
// - "The quiet room at the end of the hall" is the second lingering
//   image: a place to return to, plain and concrete, no wellness jargon.
// - "Nothing needs deciding yet" releases the pressure of the verdict
//   without ever saying "relax" or "breathe".
// - The close returns to the pen and the judge itself, so the courage
//   lands in the reader's own next movement — steadier, ready —
//   rather than in advice about courage.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Judge, set the verdict down a moment. " +
  "Rain is finding its way along the gutter, slow, certain, in no hurry. " +
  "Let this be the quiet room at the end of the hall. " +
  "Nothing needs deciding yet. " +
  "When you lift the pen again, it will still be there — " +
  "and so will you, steadier, ready.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
