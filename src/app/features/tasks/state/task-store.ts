import { computed, inject, InjectionToken } from '@angular/core';
import {
    patchState,
    signalStore,
    type,
    withComputed,
    withHooks,
    withMethods,
    withState,
} from '@ngrx/signals';
import {
    setEntities,
    withEntities,
    removeAllEntities, removeEntity,
} from '@ngrx/signals/entities';
import { TaskService } from '../services/task.service';
import { Task, TaskBoardState } from '../type/task';
import {delay, firstValueFrom} from "rxjs";

const initialState: TaskBoardState = {
    isLoading: false,
};

export const TASK_BOARD_INITIAL_STATE = new InjectionToken<TaskBoardState>(
    'TaskBoardState',
    {
        factory: () => initialState,
    }
);

export const TaskStore = signalStore(
    { providedIn: 'root' },
    withState(() => {
        console.log(
            '[Store - Init] Initializing with state:',
            inject(TASK_BOARD_INITIAL_STATE)
        );
        return inject(TASK_BOARD_INITIAL_STATE);
    }),
    withEntities({ entity: type<Task>(), collection: 'task' }),
    withComputed(store => {
        console.log('[Store - Setup] Setting up computed selectors');
        return {
            tasksTodo: computed(() => {
                const tasks = store.taskEntities().filter(t => !t.isCompleted);
                console.log('[Store - Selector] Todo tasks count:', tasks.length);
                return tasks;
            }),
            tasksDone: computed(() => {
                const tasks = store.taskEntities().filter(t => t.isCompleted);
                console.log('[Store - Selector] Done tasks count:', tasks.length);
                return tasks;
            }),
            totalTasks: computed(() => {
                const total = store.taskEntities().length;
                console.log('[Store - Selector] Total tasks:', total);
                return total;
            }),
        };
    }),
    withMethods((store, service = inject(TaskService)) => {
        const updateTasks = (tasks: Task[]) => {
            patchState(store, setEntities(tasks, { collection: 'task' }));
        };

        return {
            async fetchTasks() {
                patchState(store, { isLoading: true });

                try {
                    const tasks = await firstValueFrom(service.getTasks().pipe(delay(1000)));

                    updateTasks(tasks);
                } catch (error) {
                } finally {
                    patchState(store, { isLoading: false });
                }
            },
            async createTask(task: Task) {
                patchState(store, { isLoading: true });
                try {
                    await firstValueFrom(service.createTask(task).pipe(delay(1000)));

                    const tasks = await firstValueFrom(service.getTasks());

                    updateTasks(tasks);
                } catch (error) {
                    throw error;
                } finally {
                    patchState(store, { isLoading: false });
                }
            },
            async completeTask(taskId: string) {
                patchState(store, { isLoading: true });
                try {
                    await firstValueFrom(service.completeTask(taskId));

                    const tasks = await firstValueFrom(service.getTasks());

                    updateTasks(tasks);
                } catch (error) {
                    throw error;
                } finally {
                    patchState(store, { isLoading: false });
                }
            },
            async removeTask(taskId: string) {
                patchState(store, { isLoading: true });
                try {
                    await firstValueFrom(service.removeTask(taskId).pipe(delay(1000)));

                    // mutate the collection directly
                    patchState(store, removeEntity(taskId, { collection: 'task' }));
                } catch (error) {
                    throw error;
                } finally {
                    patchState(store, { isLoading: false });
                }
            },
        };
    }),
    withHooks(store => ({
        onInit() {
            store.fetchTasks();
        },
        onDestroy() {
            patchState(store, {
                isLoading: false,
            });
            patchState(store, removeAllEntities({ collection: 'task' }));
        },
    }))
);
