export type Task = {
    id: string;
    userId: string;
    description?: string;
    dueDate?: Date;
    createdAt: Date;
    completedAt?: Date;
    isCompleted?: boolean;
}

export type DialogConfig = {
    visible: boolean;
    header?: string;
    newTask?: boolean;
}

export type TaskBoardState = {
    isLoading: boolean;
    // pageSize: number;
    // pageCount: number;
    // currentPage: number;
}
