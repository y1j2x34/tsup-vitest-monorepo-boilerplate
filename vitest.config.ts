import { defineConfig } from 'vitest/config';

export default defineConfig({
    resolve: {
        conditions: ['@monorepo/source'],
    },
    test: {
        environment: 'node',
        globals: true,
        typecheck: {
            tsconfig: './tsconfig.test.json',
        },
        projects: [
            {
                test: {
                    name: 'unit',
                    include: ['**/unit/**/*.spec.ts'],
                    globals: true,
                },
            },
            {
                test: {
                    name: 'integration',
                    include: ['**/integration/**/*.spec.ts'],
                    globals: true,
                },
            },
        ],
    },
});
