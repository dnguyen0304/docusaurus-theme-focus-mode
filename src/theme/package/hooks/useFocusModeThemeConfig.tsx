import type { ThemeConfig } from '@docusaurus/theme-focus-mode';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function useFocusModeThemeConfig(): ThemeConfig {
    return (
        useDocusaurusContext()
            .siteConfig
            .themeConfig
            .docupotamusFocusMode
    ) as ThemeConfig;
};
