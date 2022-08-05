import {isNotNull, isNotUndefined} from "./guards";

export function notNull<T>(input: T | null): T {
    if (!isNotNull<T>(input)) throw new Error("it is null");
    return input;
}

export function notUndefined<T>(input: T | undefined): T {
    if (!isNotUndefined<T>(input)) throw new Error("it is undefined");
    return input;
}
