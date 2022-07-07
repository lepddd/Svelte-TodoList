<script>
  import { onDestroy } from "svelte";

  import { TasksStore } from "../stores/tasks.js";
  import TaskCard from "./TaskCard.svelte";

  let allTask;

  const unSub = TasksStore.subscribe((tasks) => {
    allTask = tasks;
  });

  onDestroy(() => {
    unSub();
  });

  //update taks with complete or not
  function updateComplete(event, index) {
    TasksStore.update((tasks) => {
      let currentTask = [...tasks];
      currentTask[index].complete = event.detail;
      return currentTask;
    });
  }

  //deleta task by name
  function deleteTask(name) {
    TasksStore.update((tasks) => {
      let update = tasks.filter((tasks) => tasks.title != name);
      return update;
    });
  }
</script>

<div class="task-container">
  {#each allTask as task, index}
    <TaskCard
      taskTitle={task.title}
      complete={task.complete}
      on:click={() => deleteTask(task.title)}
      on:changeComplete={(e) => updateComplete(e, index)}
    />
  {/each}
</div>

<style>
  .task-container {
    background-color: #fff;
    height: calc(100% - 267px);
    overflow: auto;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }  
  ::-webkit-scrollbar-thumb {
    background: #5e6472;
  }  
  ::-webkit-scrollbar-thumb:hover {
    background: #414345;
  }
</style>
