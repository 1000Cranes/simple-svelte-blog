import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

export const currentpage = writable('home');
export const routes = readable(['home', 'tips', 'series']);