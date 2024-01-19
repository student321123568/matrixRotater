export function generateMatrix(rows: number, cols: number) {
  return Array.from({ length: rows }, () => Array.from({ length: cols }, () => ""));
}
