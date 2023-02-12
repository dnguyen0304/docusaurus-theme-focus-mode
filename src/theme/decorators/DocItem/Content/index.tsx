import type { KeyHandlers, KeyMap } from '@docusaurus/theme-focus-mode';
import * as React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';
import FocusMode from '../../../package/components/FocusMode';
import { FocusModeProvider, useFocusMode } from '../../../package/contexts/focus-mode';
import '../../../package/styles.css'; // TODO(dnguyen0304)

const keyMap: KeyMap = {
    OPEN_ZEN_MODE: 'shift+Z',
};

interface Props {
    readonly children: React.ReactNode;
    readonly subChildren: React.ReactNode;
};

const Inner = (
    {
        children,
        subChildren,
    }: Props
): JSX.Element => {
    const { setIsOpen } = useFocusMode();

    const handlers = React.useMemo((): KeyHandlers => ({
        OPEN_ZEN_MODE: () => setIsOpen(true),
    }), []);

    return (
        <GlobalHotKeys keyMap={keyMap} handlers={handlers}>
            {children}
            <FocusMode>
                {subChildren}
            </FocusMode>
        </GlobalHotKeys>
    );
};

export default function ContentDecorator(props: Props): JSX.Element {
    return (
        <React.StrictMode>
            <FocusModeProvider>
                <Inner {...props} />
            </FocusModeProvider>
        </React.StrictMode>
    );
};
