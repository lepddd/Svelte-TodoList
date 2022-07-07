<script>
  import { TasksStore } from "../stores/tasks.js";
  import { createEventDispatcher } from "svelte";
  import Icon from "@iconify/svelte";

  const dispatch = createEventDispatcher();

  let addNew;
  let inputTitle;

  const addToStore = (name) => {
    TasksStore.update((tasks) => {
      let newTask = { title: `${name}`, complete: false };
      return [...tasks, newTask];
    });
  };

  const handleClick = () => {
    addToStore(inputTitle);
  };

  const closeClick = () => {
    addNew = false;
    dispatch("close", addNew);
  };
  
  const validateInput = () => {
    if (inputTitle) {
      handleClick();
      closeClick();
    } else {
      alert("Enter with valid task!");
    }
  };
</script>

<div class="add-new-container">
  <div class="input-container">
    <input
      class="input-task"
      type="text"
      bind:value={inputTitle}
      required
    />
    <span>New task</span>
  </div>
  <div class="btn-container">
    <button on:click={validateInput}
      ><Icon
        icon="ant-design:plus-outlined"
        color="white"
        width="20"
        height="20"
        rotate={1}
      />Add</button
    >
    <button on:click={closeClick}
      ><Icon
        class="close-icon"
        icon="ant-design:plus-outlined"
        color="white"
        width="20"
        height="20"
        rotate={1}
      /></button
    >
  </div>
</div>

<style>
  .input-container{
    position: relative;
    width: 300px;
    margin: 20px auto;
  }
  .input-container > span{
    position: absolute;
    top: 10px;
    left: 10px;
    pointer-events: none;
    color: #adb5bd;
  }
  .input-task:valid ~ span,.input-task:focus ~ span{
    font-size: 14px;
    transform: translateX(10px) translateY(-22px);
    background-color: #414345;
    color: #fff;
    padding: 2px 10px;
    border-radius: 5px;
    transition: .2s ease-in-out;
  }
  .add-new-container{
    background-color: #fff;
  }
  .input-task {
    padding: 0 10px;
    border: none;
    width: 300px;
    height: 40px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 5px;
    outline-color: #414345;
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 120px;
    height: 40px;
    background: linear-gradient(90deg, #232526 0%, #414345 100%);
    border-radius: 5px;
  }
  .btn-container > button:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    padding: 10px;
    color: #fff;
    font-size: 16px;
    width: 80px;
    background-color: transparent;
    cursor: pointer;
  }
  .btn-container > button:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .btn-container > button:last-child :global(.close-icon) {
    transform: rotateZ(45deg);
  }
</style>
