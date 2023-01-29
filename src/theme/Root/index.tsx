import type { WrapperProps } from '@docusaurus/types';
import RootInit from '@theme-init/Root';
import type RootType from '@theme/Root';
import * as React from 'react';
import useReadTimeThemeConfig from '../docusaurus-focus-mode/hooks/useFocusModeThemeConfig';
import RootSwizzle from '../docusaurus-focus-mode/theme/Root';

type Props = Readonly<WrapperProps<typeof RootType>>;

export default function RootWrapper(props: Props): JSX.Element {
    const { swizzleIsEnabled } = useReadTimeThemeConfig();

    return (
        (swizzleIsEnabled)
            ? <RootSwizzle {...props} />
            : <RootInit {...props} />
    );
};
