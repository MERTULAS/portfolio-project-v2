export const debounce = <T extends (...args: any[]) => void>(func: T, wait: number ) => {
    let timeout: NodeJS.Timeout;

    return function executedFunction(this: any, ...args: Parameters<T>) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        }

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
};