/** Compute the overscanned slice for a fixed-row-height virtual list. */
export function visibleRange(scrollTop: number, viewportHeight: number, total: number, rowHeight: number, overscan: number) {
  const safeTop = Math.max(0, scrollTop);
  const safeViewport = Math.max(0, viewportHeight);
  const start = Math.max(0, Math.floor(safeTop / rowHeight) - overscan);
  const end = Math.min(total, Math.ceil((safeTop + safeViewport) / rowHeight) + overscan);
  return { start, end: Math.max(start, end) };
}
