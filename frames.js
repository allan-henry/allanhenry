/* Created: 2026-09-11 20:20 MST (America/Phoenix)
   allanhenry.com portfolio: the frame list. This is the only file you edit to add,
   remove, or reorder work. Order here is display order.

   Each frame is one object:
     file     base filename in the bucket, without size or extension.
              Two exports must exist: <file>-2400.jpg and <file>-1200.jpg
     w, h     pixel dimensions of the 2400 export (used to letterbox before load
              and to avoid layout shift). Read them off the export.
     caption  optional one line: event, year. Leave "" for none.

   base is the public URL of the bucket prefix holding the exports, no trailing
   slash. media.allanhenry.com is the existing R2 custom domain; a portfolio/
   prefix keeps these apart from the tearsheets cache. */

export const PORTFOLIO = {
  name: "Allan Henry",
  base: "https://media.allanhenry.com/portfolio",
  credit: "Allan Henry",
  frames: [
    { file: "frame-01", w: 2400, h: 1600, caption: "WM Phoenix Open, 16th hole, 2023" },
    { file: "frame-02", w: 1600, h: 2400, caption: "" },
    { file: "frame-03", w: 2400, h: 1600, caption: "" },
  ],
};
