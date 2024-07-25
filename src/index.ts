import { visit } from 'unist-util-visit';

/**
 * Options for wrapping an element.
 */
interface ElementOptions {
    element: string;
    className?: string | undefined;
}

/**
 * Parameter type for the `rehypeWrapElement` function.
 */
type rehypeWrapElementOptions = {
    target: string | ElementOptions;
    wrapper: string | ElementOptions;
};

/**
 * Wraps elements in a tree with a specified wrapper element.
 * @param param - The target and wrapper elements.
 * @returns A function that can be used as a rehype plugin.
 *
 * @example rehypeWrapElement({ target: 'p', wrapper: 'div' });
 * @example rehypeWrapElement({ target: 'p', wrapper: { element: 'div', className: 'wrapper' } });
 * @example rehypeWrapElement({ target: { element: 'p', className: 'target' }, wrapper: 'div' });
 * @example rehypeWrapElement({ target: { element: 'p', className: 'target' }, wrapper: { element: 'div', className: 'wrapper' } });
 */
function rehypeWrapElement({ target, wrapper }: rehypeWrapElementOptions) {
    /**
     * Assigns options to an element parameter.
     * @param param - The element parameter.
     * @returns The assigned options.
     */
    let assignOptions = (
        param: string | ElementOptions
    ): { element: string; className: string | boolean } => {
        if (typeof param === 'string') {
            return {
                element: param,
                className: true,
            };
        }
        return {
            element: param.element,
            className: param.className ? param.className : true,
        };
    };

    let { element: targetElement, className: targetClassName } = assignOptions(
        target
    );
    let { element: wrapperElement, className: wrapperClassName } = assignOptions(
        wrapper
    );

    /**
     * Visits elements in the tree and wraps the target elements with the specified wrapper element.
     * @param tree - The tree to visit.
     */
    return (tree:any) => {
        visit(tree, 'element', (node, index, parent) => {
            if (
                node.tagName === targetElement &&
                (targetClassName === true
                    ? targetClassName
                    : node.className === targetClassName)
            ) {
                // @ts-expect-error
                parent.children[index] = {
                    type: 'element',
                    tagName: wrapperElement,
                    properties: {
                        className: wrapperClassName === true ? undefined : [wrapperClassName],
                    },
                    children: [node],
                };
            }
        });
    };
}


export default rehypeWrapElement;
export { rehypeWrapElement ,rehypeWrapElementOptions};