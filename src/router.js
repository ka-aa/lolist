import Home from './views/Home.svelte';
import List from './views/List.svelte';
import { writable } from 'svelte/store';

const router = {
  '/': Home,
  '/List': List
};
export default router;
export const curRoute = writable('/');
