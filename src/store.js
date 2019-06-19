import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

export const currentpage = writable('home');
export const pages = readable(['home', 'tips', 'series']);
export const tips = readable(['building_a_simple_blog_with_svelte', 'building_a_simple_blog_part_three']);
