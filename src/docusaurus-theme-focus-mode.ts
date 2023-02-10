/// <reference types="@docusaurus/theme-classic" />

declare module '@docupotamus/docusaurus-theme-focus-mode' {
    import type { KeySequence } from 'react-hotkeys';

    interface PluginOptions {
        readonly swizzleIsEnabled: boolean;
    }

    interface ThemeConfig {
        readonly debug: {
            readonly isOpen: boolean;
        };
    }

    type KeyBindings = 'OPEN_ZEN_MODE';

    type KeyMap = {
        [key in KeyBindings]: KeySequence;
    };

    type KeyHandlers = {
        [key in KeyBindings]: (
            keyboardEvent?: KeyboardEvent | undefined,
        ) => void;
    };
}

declare module '@docusaurus/theme-focus-mode' {
    export * from '@docupotamus/docusaurus-theme-focus-mode';
}
