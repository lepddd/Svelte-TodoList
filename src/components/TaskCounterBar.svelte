<script>
  import { TasksStore } from "../stores/tasks.js";

  let allTasks;

  TasksStore.subscribe((tasks) => (allTasks = tasks));

  //update variables automaticaly when store is change
  $: totalCompleted = allTasks.filter((task) => {
    return task.complete === true;
  }).length;
  $: totalTasks = allTasks.length;
  $: totalRemaining = totalTasks - totalCompleted;
</script>

<div class="task-bar">
  <div>
    <p>{totalTasks}</p>
    <p>Total</p>
  </div>
  <div>
    <p>{totalRemaining}</p>
    <p>Remaining</p>
  </div>
  <div>
    <p>{totalCompleted}</p>
    <p>Done</p>
  </div>
</div>

<style>
  .task-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: #fff;
  }
  .task-bar div p:first-child {
    font-size: 14px;
    font-weight: 500;
  }
  .task-bar div p:last-child {
    font-size: 14px;
    font-weight: 700;
  }
</style>
