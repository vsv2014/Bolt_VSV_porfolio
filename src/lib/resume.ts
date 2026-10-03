import { profile } from '@/data/site';

/**
 * Résumé link resolution, shared by the hero button and the command palette.
 *
 * Prefer the external, update-in-place URL when one is set (e.g. a Google Drive
 * share link) so the button always serves the newest file with no rebuild;
 * otherwise fall back to the bundled PDF in `public/`.
 */
export const resumeHref: string = profile.resumeUrl || `${import.meta.env.BASE_URL}${profile.resumeFile}`;

/** True when the link points off-site (opens a new tab / Drive preview). */
export const resumeIsExternal = Boolean(profile.resumeUrl);
