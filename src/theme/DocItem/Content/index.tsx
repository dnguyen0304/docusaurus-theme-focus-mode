import type { WrapperProps } from '@docusaurus/types';
import ContentInit from '@theme-init/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import * as React from 'react';
import useFocusModeThemeConfig from '../../docusaurus-focus-mode/hooks/useFocusModeThemeConfig';
import ContentSwizzle from '../../docusaurus-focus-mode/theme/DocItem/Content';

type Props = Readonly<WrapperProps<typeof ContentType>>;

export default function ContentWrapper(props: Props): JSX.Element {
    const { swizzleIsEnabled } = useFocusModeThemeConfig();

    return (
        (swizzleIsEnabled)
            ? <ContentSwizzle {...props} />
            : <ContentInit {...props} />
    );
};
