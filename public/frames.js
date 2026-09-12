/* Created: 2026-09-11 21:05 MST (America/Phoenix). Supersedes the 20:45 copy: one file per frame.
   allanhenry.com portfolio: the frame list. This is the only file you edit to add,
   remove, or reorder work. Order here is display order.

   Each frame is one object:
     file     exact filename in the bucket, extension included. One export per
              frame, long edge 2400 or native if smaller, under 1MB. Any name
              works; no spaces is the only rule.
     w, h     pixel dimensions of that file (used to letterbox before load and
              to avoid layout shift). Read them off the export.
     caption  optional one line: event, year. Leave "" for none.
     credit   optional. Overrides the default credit line, for a frame someone
              else shot (a picture of you by another photographer).

   base is the public URL of the bucket prefix holding the exports, no trailing
   slash. media.allanhenry.com is the existing R2 custom domain; a portfolio/
   prefix keeps these apart from the tearsheets cache. */

export const PORTFOLIO = {
  name: "Allan Henry",
  base: "https://media.allanhenry.com/portfolio",
  credit: "Allan Henry",
  frames: [
    { file: "frame-01.jpg", w: 2400, h: 2400, caption: "With Dustin Johnson, Whistling Straits", credit: "Andy Lyons" },
    { file: "frame-02.jpg", w: 1595, h: 1063, caption: "Tiger Woods" },
  ],
};
