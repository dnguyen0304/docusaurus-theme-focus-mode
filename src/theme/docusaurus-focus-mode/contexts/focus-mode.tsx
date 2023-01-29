import * as React from 'react';
import useFocusModeThemeConfig from '../hooks/useFocusModeThemeConfig';
import { ReactContextError } from './errors';

interface ContextValue {
    readonly isOpen: boolean;
    readonly setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = React.createContext<ContextValue | undefined>(undefined);

const useContextValue = (): ContextValue => {
    const {
        debug: {
            isEnabled,
        },
    } = useFocusModeThemeConfig();

    const [isOpen, setIsOpen] = React.useState<boolean>(isEnabled);

    return React.useMemo(
        () => ({
            isOpen,
            setIsOpen,
        }),
        [
            isOpen,
            setIsOpen,
        ],
    );
};

interface Props {
    readonly children: React.ReactNode;
};

export const FocusModeProvider = ({ children }: Props): JSX.Element => {
    const value = useContextValue();

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export const useFocusMode = (): ContextValue => {
    const context = React.useContext(Context);
    if (context === undefined) {
        throw new ReactContextError('FocusModeProvider');
    }
    return context;
};
