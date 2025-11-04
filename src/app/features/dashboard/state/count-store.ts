import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Count } from '../type/count-type';

type CountState = {
    count: Count;
    isLoading: boolean;
};

const initialState: CountState = {
    count: { value: 0 },
    isLoading: false,
};

export const CountStateStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        increment(): void {
            // 👇 Updating state using the `patchState` function.
            patchState(store, (state) => ({ count: { value: ++state.count.value } }));
        },
        decrement(): void {
            patchState(store, (state) => ({ count: { value: 10 } }));
        },
    }))
);