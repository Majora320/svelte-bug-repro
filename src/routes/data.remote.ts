import { query } from '$app/server';

export const getData = query(async() => {
    return [1, 2, 3];
});