/** Compute the overscanned slice for a fixed-row-height virtual list. */
export function visibleRange(scrollTop: number, viewportHeight: number, total: number, rowHeight: number, overscan: number) {
  const safeViewport = Math.max(0, viewportHeight);
  const safeTop = Math.min(Math.max(0, scrollTop), Math.max(0, total * rowHeight - safeViewport));
  const start = Math.max(0, Math.floor(safeTop / rowHeight) - overscan);
  const end = Math.min(total, Math.ceil((safeTop + safeViewport) / rowHeight) + overscan);
  return { start, end: Math.max(start, end) };
}
