import { atom } from 'jotai';
type CaseCategoryData = { category: string; anchor: string } | null | undefined;

export const isOpenSubMenuAtom = atom<boolean>(false);

export const selectedCaseCategoryAtom = atom<CaseCategoryData>(null);
