export const cls = (...classes: Array<string|undefined|false|null>): string => {
    return classes.reduce<string>((acc, item) => `${acc} ${item || ''}`.trim(), '');
};
