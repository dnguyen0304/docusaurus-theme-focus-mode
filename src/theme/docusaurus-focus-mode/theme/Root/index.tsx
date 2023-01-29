import type { KeyMap } from '@docusaurus/theme-focus-mode';
import * as React from 'react';
import { HotKeys } from 'react-hotkeys';
import '../../styles.css';

const keyMap: KeyMap = {
    ZEN_MODE: 'shift+Z',
};

interface Props {
    readonly children: React.ReactNode;
};

export default function Root({ children }: Props): JSX.Element {
    return (
        <React.StrictMode>
            <HotKeys keyMap={keyMap}>
                {children}
            </HotKeys>
        </React.StrictMode>
    );
};
