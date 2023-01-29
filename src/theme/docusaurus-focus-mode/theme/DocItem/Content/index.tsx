import type { KeyHandlers } from '@docusaurus/theme-focus-mode';
import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ContentInit from '@theme-init/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import * as React from 'react';
import { HotKeys } from 'react-hotkeys';
import FocusMode from '../../../components/FocusMode';

type Props = Readonly<WrapperProps<typeof ContentType>>;

export default function ContentWrapper(props: Props): JSX.Element {
    const {
        debug: {
            isEnabled,
        },
    } = useDocusaurusContext()
        .siteConfig
        .themeConfig
            .docupotamusFocusMode;

    const [isOpen, setIsOpen] = React.useState<boolean>(isEnabled);

    const handlers = React.useMemo((): KeyHandlers => ({
        OPEN_ZEN_MODE: () => setIsOpen(true),
    }), []);

    return (
        <>
            {/* TODO(dnguyen0304): Move to a parent component for better
                  scope. */}
            <HotKeys handlers={handlers}>
                <ContentInit {...props} />
            </HotKeys>
            <FocusMode isOpen={isOpen} setIsOpen={setIsOpen}>
                {props.children}
            </FocusMode>
        </>
    );
};
