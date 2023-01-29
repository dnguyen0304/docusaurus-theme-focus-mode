/// <reference types="@docusaurus/theme-classic" />

declare module '@docusaurus/theme-focus-mode' {
    import type { KeySequence } from 'react-hotkeys';

    interface ThemeConfig {
        readonly swizzleIsEnabled: boolean;
        readonly debug: {
            readonly isEnabled: boolean;
        };
    }

    type KeyBindings = 'ZEN_MODE';

    type KeyMap = {
        [key in KeyBindings]: KeySequence;
    };

    type KeyHandlers = {
        [key in KeyBindings]: (
            keyboardEvent?: KeyboardEvent | undefined,
        ) => void;
    };
}
