export type Task = {
    id: string;
    title: string;
    description?: string;
    status: 'todo' | 'in-progress' | 'done';
    createdAt: string;
}

export type TaskBoardState = {
    isLoading: boolean;
    pageSize: number;
    pageCount: number;
    currentPage: number;
}
