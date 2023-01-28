import Box from '@mui/material/Box';
import { styled, SxProps, Theme } from '@mui/material/styles';
import MDXContent from '@theme/MDXContent';
import * as React from 'react';
import styles from './styles.module.css';

const StyledBox = styled(Box)({
    // TODO(dnguyen0304): Fix missing responsive design.
    width: '60%',
    // TODO(dnguyen0304): Investigate why using a percentage does not work.
    height: '60vh',
    display: 'grid',
    placeItems: 'center',
    // TODO(dnguyen0304): Extract to a centralized location to facilitate
    //   maintenance.
    backgroundColor: 'rgb(249, 249, 249)',
    borderRadius: '1rem',
    boxShadow: `
        5px 5px 10px 0 rgb(0 0 0 / 5%),
        10px 10px 20px 0 rgb(0 0 0 / 5%),
        20px 20px 40px 0 rgb(0 0 0 / 5%),
        40px 40px 80px 0 rgb(0 0 0 / 5%)`,
});

const addWrapper = (
    toWrap: Element,
    wrapperClassName: string,
): HTMLDivElement => {
    const wrapper = document.createElement('div');
    toWrap.parentNode?.insertBefore(wrapper, toWrap);
    wrapper.appendChild(toWrap);
    wrapper.classList.toggle(wrapperClassName);
    return wrapper;
};

const isAdmonition = (classList: DOMTokenList): boolean => {
    // TODO(dnguyen0304): Extract to config.
    return [...classList].some(x => x.startsWith('admonition'));
};

const isCodeBlock = (classList: DOMTokenList): boolean => {
    // TODO(dnguyen0304): Extract to config.
    return [...classList].some(x => x.startsWith('codeBlockContainer'));
};

const addClassName = (element: Element, className: string) => {
    if (element.tagName === 'DIV') {
        if (isAdmonition(element.classList)) {
            return;
        }
        if (isCodeBlock(element.classList)) {
            return
        }
    }
    element.classList.toggle(className);
};

interface Props {
    readonly children: React.ReactNode;
    readonly chunkIndex: number;
    readonly sx?: SxProps<Theme>;
};

export default function ContentFocus(
    {
        children,
        chunkIndex,
        sx,
    }: Props,
): JSX.Element {
    const clippingBoxRef = React.useRef<HTMLDivElement>();
    const chunksRef = React.useRef<Element[]>([]);

    // TODO(dnguyen0304): Support scrolling.
    // const getActiveChunkIndex = () => {
    //     if (!clippingBoxRef.current) {
    //         return;
    //     }
    //     // TODO(dnguyen0304): Update height with react-resize-detector.
    //     const newChunkIndex = Math.round(
    //         clippingBoxRef.current.scrollTop
    //         / clippingBoxRef.current.getBoundingClientRect().height
    //     );
    //     setChunkIndex(newChunkIndex);
    // };

    // TODO(dnguyen0304): Investigate extracting to useChildElementScroll hook
    //   to minimize duplicated code.
    React.useEffect(() => {
        const chunk = chunksRef.current[chunkIndex];
        if (!chunk) {
            return;
        }
        chunk.scrollIntoView({
            behavior: 'smooth',
            // Because child elements are the same height as the parent element,
            // using center or start are functionally equivalent.
            block: 'start',
        });
    }, [chunkIndex]);

    // TODO(dnguyen0304): Investigate extracting to useChildElements hook.
    React.useEffect(() => {
        if (!clippingBoxRef.current) {
            // TODO(dnguyen0304): Add error handling.
            return;
        }
        const chunks = [...clippingBoxRef.current.children];
        for (let i = 0; i < chunks.length; ++i) {
            const chunkToWrap = chunks[i];
            const wrapper = addWrapper(chunkToWrap, styles.chunk_container);
            addClassName(chunkToWrap, styles.chunk);
            chunksRef.current.push(wrapper);
        }
    }, []);

    return (
        <StyledBox
            onClick={(event) => event.stopPropagation()}
            sx={sx}
        >
            <Box
                className={`${styles.clippingBox} ${styles.scrollbar__hidden}`}
                ref={clippingBoxRef}
            >
                <MDXContent>{children}</MDXContent>
            </Box>
        </StyledBox>
    );
};
