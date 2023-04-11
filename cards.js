function countFullDecks(cards) {
  const counts = {
    WPIK: 0,
    WKIE: 0,
    WTRE: 0,
    WKAR: 0,
    DPIK: 0,
    DKIE: 0,
    DTRE: 0,
    DKAR: 0,
    KPIK: 0,
    KKIE: 0,
    KTRE: 0,
    KKAR: 0,
    APIK: 0,
    AKIE: 0,
    ATRE: 0,
    AKAR: 0,
  };

  for (const card of cards) {
    counts[card]++;
  }
  let minCount;
  let arr = Object.values(counts);
  minCount = Math.min(...arr);

  return minCount;
}

const cards = [
  'WPIK',
  'WKIE',
  'WTRE',
  'WKAR',
  'DPIK',
  'DKIE',
  'DTRE',
  'DKAR',
  'KPIK',
  'KKIE',
  'KTRE',
  'KKAR',
  'APIK',
  'AKIE',
  'ATRE',
  'AKAR',

];

console.log(countFullDecks(cards));
