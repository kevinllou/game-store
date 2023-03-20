export default interface IApiResponse<T> {
    count: number;
    next: string;
    previos: null | string;
    results: Array<T>;
}
