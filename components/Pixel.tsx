// Sprite pixel-art buatan sendiri: tiap karakter = 1 piksel, '.' = transparan.
const PAL: Record<string, string> = {
  k: "#16131f", w: "#ffffff", b: "#2f5bff", B: "#9dbbff", p: "#ff4fd8", P: "#ffb8ee",
  y: "#ffe14a", o: "#ff8a1f", r: "#ff3b4e", g: "#27c93f", G: "#a6f58f", s: "#c9c9d8",
  d: "#6b6b7e", n: "#a8642a", t: "#ffd98a", v: "#8b5cf6",
};

export const SPRITES: Record<string, string[]> = {
  folder: [
    "..kkkkk.......", ".kyyyyyk......", "kkkkkkkkkkkkk.", "kyyyyyyyyyyyk.", "kyttttttttyyk.",
    "kyyyyyyyyyyyk.", "kyyyyyyyyyyyk.", "kyyyyyyyyyyyk.", "kkkkkkkkkkkkk.",
  ],
  floppy: [
    "kkkkkkkkkkkk", "kbbsssssbbkk", "kbbsssksbbbk", "kbbsssksbbbk", "kbbsssssbbbk", "kbbbbbbbbbbk",
    "kbwwwwwwwwbk", "kbwwwwwwwwbk", "kbwkkkkkkwbk", "kbwwwwwwwwbk", "kbbbbbbbbbbk", "kkkkkkkkkkkk",
  ],
  mail: [
    "kkkkkkkkkkkk", "kwwwwwwwwwwk", "kkwwwwwwwwkk", "kwkwwwwwwkwk", "kwwkwwwwkwwk",
    "kwwwkkkkwwwk", "kwwwwwwwwwwk", "kwwwwwwwwwwk", "kkkkkkkkkkkk",
  ],
  star: [
    ".....y.....", "....yyy....", "....yyy....", "yyyyyyyyyyy", ".yyyyyyyyy.", "..yyyyyyy..",
    "..yyyyyyy..", ".yyyy.yyyy.", ".yyy...yyy.",
  ],
  heart: [".pp..pp.", "pppppppp", "pppppppp", ".pppppp.", "..pppp..", "...pp..."],
  spark: [
    "....g....", "....g....", "...ggg...", "ggggggggg", "...ggg...", "....g....", "....g....",
  ],
  smile: [
    "..kkkkkk..", ".kyyyyyyk.", "kyyyyyyyyk", "kykkyykkyk", "kyyyyyyyyk", "kykyyyykyk",
    "kyykkkkyyk", ".kyyyyyyk.", "..kkkkkk..",
  ],
  frog: [
    "..gggggg..", ".gwwggwwg.", ".gwkggkwg.", "gggggggggg", "gggkkkkggg", "gggggggggg", ".gg....gg.",
  ],
  info: [
    "..kkkkkkk..", ".kwwwwwwwk.", "kwwwbbbwwwk", "kwwwbbbwwwk", "kwwwwwwwwwk", "kwwbbbbwwwk",
    "kwwwbbbwwwk", "kwwwbbbwwwk", "kwwbbbbbwwk", ".kwwwwwwwk.", "..kkkkwkk..", "......kk...",
  ],
  grad: [
    "..bb..", ".bbbb.", "bb..bb", "bb..bb", "bbbbbb", "bb..bb", "bb..bb",
  ],
  disc: [
    "...kkkkkk...", "..kssssssk..", ".ksBBwwsssk.", "ksBsssssssdk", "ksBssskkssdk", "kssssskkssdk",
    "kssssssssddk", ".kssssssddk.", "..kddddddk..", "...kkkkkk...",
  ],
  arrow: [
    "k........", "kk.......", "kwk......", "kwwk.....", "kwwwk....", "kwwwwk...", "kwwwwwk..",
    "kwwwwwwk.", "kwwwkkkkk", "kwkwk....", "kk.kwk...", "k..kwk...", "....kk...",
  ],
  sun: [
    "....y....", ".y..y..y.", "..yyyyy..", "..yyyyy..", "yyyyyyyyy", "..yyyyy..", "..yyyyy..", ".y..y..y.", "....y....",
  ],
  moon: [
    "..yyyy...", ".yyyy....", "yyyy.....", "yyyy.....", "yyyy.....", "yyyy.....", ".yyyy..yy", "..yyyyyy.", "....yyy..",
  ],
  linkedin: [
    "bbbbbbbbbbb", "bbbbbbbbbbb", "bwbbbbbbbbb", "bbbbbbbbbbb", "bwbwbwwwbbb", "bwbwwbbwbbb", "bwbwbbbwbbb", "bwbwbbbwbbb", "bbbbbbbbbbb", "bbbbbbbbbbb",
  ],
  github: [
    "kk.....kk", "kkk...kkk", "kkkkkkkkk", "kkkkkkkkk", "kwkkkkkwk", "kkkkkkkkk", "kkkkwkkkk", ".kkkkkkk.", "..kkkkk..",
  ],
  bag: [
    "...kkkk...", "...k..k...", "kkkkkkkkkk", "kttttttttk", "kttttttttk", "kkkkyykkkk", "kttttttttk", "kttttttttk", "kkkkkkkkkk",
  ],
  win: [
    "kkkkkkkkkkk", "kbbbbbbbbbk", "kwwwwwwwwwk", "kwrrwggwwwk", "kwrrwggwwwk", "kwwwwwwwwwk",
    "kwbbwyywwwk", "kwbbwyywwwk", "kwwwwwwwwwk", "kkkkkkkkkkk",
  ],
};

export function Pixel({ name, size = 4, className }: { name: string; size?: number; className?: string }) {
  const rows = SPRITES[name] ?? [];
  const w = Math.max(...rows.map((r) => r.length));
  const cells: React.ReactNode[] = [];
  rows.forEach((row, y) =>
    [...row].forEach((c, x) => {
      const fill = PAL[c];
      if (fill) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" fill={fill} />);
    }),
  );
  return (
    <svg
      viewBox={`0 0 ${w} ${rows.length}`}
      width={w * size}
      height={rows.length * size}
      shapeRendering="crispEdges"
      className={className}
      aria-hidden
    >
      {cells}
    </svg>
  );
}
