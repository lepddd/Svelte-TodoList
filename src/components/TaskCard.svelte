<script>
  import { TasksStore } from "../stores/tasks.js";
  import Icon from "@iconify/svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    complete = !complete;
    dispatch("changeComplete", complete);
  };

  export let taskTitle;
  export let complete = false;
</script>

<div class="task-card">
  <span class="check-box" class:active={complete === true} />
  <span class="task-name" class:active={complete === true} on:click={handleClick}>{taskTitle}</span>
  <span class="delete-button" on:click
    ><Icon
      icon="akar-icons:minus"
      color="#495057"
      width="24"
      height="24"
    /></span
  >
</div>

<style>
  .task-card {
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
    margin: 0 auto;
    padding: 6px 10px;
    margin-bottom: 10px;
    color: #495057;
  }
  .check-box {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #495057;
    background-color: white;
    border-radius: 50%;
  }
  .check-box.active::after {
    position: absolute;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    content: "";
    width: 8px;
    height: 8px;
    background-color: #495057;
  }
  .task-name {
    margin: 0 10px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
  .task-name.active {
    text-decoration: line-through;
  }
  .delete-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
</style>
