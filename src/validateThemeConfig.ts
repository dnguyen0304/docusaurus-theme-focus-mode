import type { ThemeConfig as FocusModeThemeConfig } from '@docusaurus/theme-focus-mode';
import type {
    ThemeConfig,
    ThemeConfigValidationContext
} from '@docusaurus/types';
import { Joi } from '@docusaurus/utils-validation';

declare module '@docusaurus/types' {
    interface ThemeConfig {
        docupotamusFocusMode: FocusModeThemeConfig;
    }
};

const DEFAULT_THEME_CONFIG: FocusModeThemeConfig = {
    swizzleIsEnabled: true,
    debug: {
        isEnabled: true,
    },
};

// TODO(dnguyen0304): Investigate missing labels.
// TODO(dnguyen0304): Fix incorrect ThemeConfig type.
export const ThemeConfigSchema = Joi.object<ThemeConfig>({
    docupotamusFocusMode: Joi.object({
        swizzleIsEnabled: Joi
            .boolean()
            .default(DEFAULT_THEME_CONFIG.swizzleIsEnabled),
        debug: Joi.object({
            isEnabled: Joi
                .boolean()
                .default(DEFAULT_THEME_CONFIG.debug.isEnabled),
        })
            .default(DEFAULT_THEME_CONFIG.debug),
    })
        .label('themeConfig.docupotamusFocusMode')
        .default(DEFAULT_THEME_CONFIG),
});

export const validateThemeConfig = ({
    validate,
    themeConfig,
}: ThemeConfigValidationContext<ThemeConfig>): ThemeConfig => {
    return validate(ThemeConfigSchema, themeConfig);
};
