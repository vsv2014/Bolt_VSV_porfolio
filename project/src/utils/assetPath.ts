export const getAssetPath = (path: string): string => {
  const base = import.meta.env.MODE === 'production' ? '/Bolt_VSV_porfolio' : '';
  return `${base}${path}`;
};
