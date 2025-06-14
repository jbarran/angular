export interface Project {
    id: string;
    name: string;
    status: 'active' | 'paused' | 'archived';
    createdAt: Date;
}