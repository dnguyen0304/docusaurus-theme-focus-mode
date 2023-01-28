import type { Plugin } from '@docusaurus/types';

export default function themeFocusMode(): Plugin<undefined> {
    return {
        name: 'docusaurus-theme-focus-mode',

        getThemePath() {
            return '../lib/theme';
        },

        getTypeScriptThemePath() {
            return '../src/theme';
        },
    };
};

export { validateThemeConfig } from './validateThemeConfig';

export const getSwizzleComponentList = (): string[] => [];
