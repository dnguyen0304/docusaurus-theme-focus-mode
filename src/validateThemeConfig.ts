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
    debug: {
        isOpen: false,
    },
};

// TODO(dnguyen0304): Investigate missing labels.
export const ThemeConfigSchema = Joi.object<ThemeConfig>({
    docupotamusFocusMode: Joi.object({
        debug: Joi.object({
            isOpen: Joi
                .boolean()
                .default(DEFAULT_THEME_CONFIG.debug.isOpen),
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
