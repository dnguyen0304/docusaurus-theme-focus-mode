import * as React from 'react';
import { FocusModeProvider } from '../../contexts/focus-mode';
import '../../styles.css';

interface Props {
    readonly children: React.ReactNode;
};

export default function Root({ children }: Props): JSX.Element {
    return (
        <React.StrictMode>
            <FocusModeProvider>
                {children}
            </FocusModeProvider>
        </React.StrictMode>
    );
};
