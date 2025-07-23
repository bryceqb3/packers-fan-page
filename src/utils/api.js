export async function fetchNextGameDate() {
  const res = await fetch(
    'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133602'
  );
  const json = await res.json();
  const next = json.events?.[0];
  if (!next) return null;
  return next.dateEvent + 'T' + (next.strTime || '19:00:00') + 'Z';
}