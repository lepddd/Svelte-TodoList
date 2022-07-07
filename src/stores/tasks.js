import { writable } from 'svelte/store';

export const TasksStore = writable([
  { title: "Buy milk", complete: false },
  { title: "Buy bread", complete: false },
  { title: "Pay the bill's", complete: false },
  { title: "Go to barber shop", complete: false },
  { title: "Take a break", complete: false },
]);
