export interface IPagination<T> {
    getPages(dataSource: T[]): T[];
    reset(): void;
    next(): void;
}