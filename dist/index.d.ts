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
declare function rehypeWrapElement({ target, wrapper }: rehypeWrapElementOptions): (tree: any) => void;
export default rehypeWrapElement;
export { rehypeWrapElement, rehypeWrapElementOptions };
