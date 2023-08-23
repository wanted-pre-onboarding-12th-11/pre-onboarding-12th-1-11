import React, {useReducer, useEffect} from 'react';

interface AsyncState<Data> {
    loading: boolean;
    data: Data | null;
    error: Error | null;
}

type AsyncAction<Data> =
    | {type: 'LOADING'}
    | {type: 'SUCCESS'; data: Data}
    | {type: 'ERROR'; error: Error};

const reducer = <Data>(state: AsyncState<Data>, action: AsyncAction<Data>): AsyncState<Data> => {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type`);
    }
};

const useAsync = <Data>(
    callback: () => Promise<Data>,
    deps: [] = [],
    skip = false
): [AsyncState<Data>, () => Promise<void>] => {
    const [state, dispatch] = useReducer<React.Reducer<AsyncState<Data>, AsyncAction<Data>>>(
        reducer,
        {
            loading: false,
            data: null,
            error: null,
        }
    );

    const fetchData = async () => {
        dispatch({type: 'LOADING'});
        try {
            const data = await callback();
            dispatch({type: 'SUCCESS', data});
        } catch (e: unknown) {
            if (e instanceof Error) {
                dispatch({type: 'ERROR', error: e});
            } else {
                // e가 Error 타입이 아닌 경우에 대한 처리
                console.error('확인할 수 없는 에러 발생');
            }
        }
    };

    useEffect(() => {
        if (skip) return;
        fetchData();
        // eslint 설정을 다음 줄에서만 비활성화
        // eslint-disable-next-line
    }, deps);

    return [state, fetchData];
};

export default useAsync;
