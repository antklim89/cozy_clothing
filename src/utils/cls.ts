export const cls = (...classes: Array<string|undefined|false|null>): string => (
    classes.reduce<string>((acc, item): string => {
        return `${acc} ${item || ''}`;
    }, '')
);
