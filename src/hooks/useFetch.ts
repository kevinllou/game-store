import { useState, useEffect } from "react";
interface UseFetchState<T> {
    state: 'idle' | 'loading' | 'error' | 'success';
    data: null | T;
    error: null | Error;
}
export const useFetch = <T>(url: string, configs?: object) => {
    const [fetchState, setFetchState] = useState<UseFetchState<T>>({
        state: 'idle',
        data: null,
        error: null
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setFetchState((oldValues) => ({
                    ...oldValues,
                    state: 'loading'
                }));
                const response = await fetch(url, configs);
                if (!response.ok) {
                    setFetchState({ data: null, state: 'error', error: new Error(response.statusText) })
                    return;
                }
                const dataJson = await response.json();
                setFetchState({ data: dataJson, state: 'success', error: null });

            } catch (error) {
                setFetchState({
                    data: null,
                    state: 'error',
                    error: error as Error
                })
            }
        }
        fetchData();
    }, [url])

    return fetchState;
}