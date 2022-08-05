
export const isNotNull = <T>(maybe: T | null): maybe is T => typeof maybe !== null

export const isNotUndefined = <T>(maybe: T | undefined): maybe is T => typeof maybe !== undefined
