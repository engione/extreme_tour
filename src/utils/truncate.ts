export const truncate = (text: string) =>
  text.length > 100 ? text.slice(0, 99) + "…" : text;
