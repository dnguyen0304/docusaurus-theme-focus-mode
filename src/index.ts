import type { PluginOptions } from '@docusaurus/theme-focus-mode';
import type { LoadContext, Plugin } from '@docusaurus/types';

export default function themeFocusMode(
    _context: LoadContext,
    options: PluginOptions,
): Plugin<undefined> {
    const { swizzleIsEnabled = true } = options;

    return {
        name: 'docupotamus-theme-focus-mode',

        getThemePath() {
            if (swizzleIsEnabled) {
                return '../lib/theme/swizzle';
            }
            return '../lib/theme/public';
        },

        getTypeScriptThemePath() {
            if (swizzleIsEnabled) {
                return '../src/theme/swizzle';
            }
            return '../src/theme/public';
        },
    };
};

export { validateThemeConfig } from './validateThemeConfig';

export const getSwizzleComponentList = (): string[] => [];
