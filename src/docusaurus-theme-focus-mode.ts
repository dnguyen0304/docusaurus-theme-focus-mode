/// <reference types="@docusaurus/theme-classic" />

declare module '@docusaurus/theme-focus-mode' {
    interface ThemeConfig {
        readonly swizzleIsEnabled: boolean;
        readonly debug: {
            readonly isEnabled: boolean;
        };
    }
}
