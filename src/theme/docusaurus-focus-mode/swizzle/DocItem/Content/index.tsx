import type { KeyHandlers, KeyMap } from '@docusaurus/theme-focus-mode';
import type { WrapperProps } from '@docusaurus/types';
import ContentInit from '@theme-init/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import * as React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';
import FocusMode from '../../../components/FocusMode';
import { FocusModeProvider, useFocusMode } from '../../../contexts/focus-mode';
import '../../../styles.css'; // TODO(dnguyen0304)

const keyMap: KeyMap = {
    OPEN_ZEN_MODE: 'shift+Z',
};

type Props = Readonly<WrapperProps<typeof ContentType>>;

const Wrapped = (props: Props): JSX.Element => {
    const { setIsOpen } = useFocusMode();

    const handlers = React.useMemo((): KeyHandlers => ({
        OPEN_ZEN_MODE: () => setIsOpen(true),
    }), []);

    return (
        <GlobalHotKeys keyMap={keyMap} handlers={handlers}>
            <ContentInit {...props} />
            <FocusMode>
                {props.children}
            </FocusMode>
        </GlobalHotKeys>
    );
};

export default function ContentWrapper(props: Props): JSX.Element {
    return (
        <React.StrictMode>
            <FocusModeProvider>
                <Wrapped {...props} />
            </FocusModeProvider>
        </React.StrictMode>
    );
};
