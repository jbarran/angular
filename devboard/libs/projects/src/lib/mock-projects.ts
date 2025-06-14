import { Project } from '@devboard/models';

export const MOCK_PROJECTS: Project[] = [
    {
        id: 'p001',
        name: 'AI Dashboard',
        status: 'active',
        createdAt: new Date('2024-12-10'),
    },
    {
        id: 'p002',
        name: 'Cost Calculator',
        status: 'paused',
        createdAt: new Date('2024-06-01'),
    },
    {
        id: 'p003',
        name: 'Mobile App',
        status: 'archived',
        createdAt: new Date('2023-11-20'),
    },
];