/* Created: 2026-09-11 20:45 MST (America/Phoenix). Supersedes the 20:20 copy.
   allanhenry.com portfolio: the frame list. This is the only file you edit to add,
   remove, or reorder work. Order here is display order.

   Each frame is one object:
     file     base filename in the bucket, without size or extension.
              Two exports must exist: <file>-2400.jpg and <file>-1200.jpg
     w, h     pixel dimensions of the 2400 export (used to letterbox before load
              and to avoid layout shift). Read them off the export.
     caption  optional one line: event, year. Leave "" for none.
     credit   optional. Overrides the default credit line, for a frame someone
              else shot (a picture of you by another photographer).
     large    optional. Width of the large export when the native file is under
              2400 wide. Never upscale: export at native, set large to that width,
              and name the file <file>-<large>.jpg. Defaults to 2400.

   base is the public URL of the bucket prefix holding the exports, no trailing
   slash. media.allanhenry.com is the existing R2 custom domain; a portfolio/
   prefix keeps these apart from the tearsheets cache. */

export const PORTFOLIO = {
  name: "Allan Henry",
  base: "https://media.allanhenry.com/portfolio",
  credit: "Allan Henry",
  frames: [
    { file: "frame-01", w: 2400, h: 2400, caption: "With Dustin Johnson, Whistling Straits", credit: "Andy Lyons" },
    { file: "frame-02", w: 1595, h: 1063, large: 1595, caption: "Tiger Woods" },
  ],
};
