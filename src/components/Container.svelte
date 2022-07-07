<script>
  import AddNewTask from "./AddNewTask.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import TaskContainer from "./TaskContainer.svelte";
  import TaskTitle from "./TaskTitle.svelte";
  
  //open and close add new task tab
  let addNew = false;

  const closeAddNew = (e) => {
    addNew = e.detail;
  };

  const openAddNew = () => {
    addNew = true
  }
</script>

<div class="container">
  <Header />
  {#if addNew}
    <TaskTitle title={"Add"} body={"new task"} />
    <AddNewTask on:close={(e) => closeAddNew(e)} on:click={(e) => closeAddNew(e)}/>
  {:else}
    <TaskTitle title={"Task"} body={"for today"} />
    <TaskContainer />
    <Footer on:click={() => openAddNew()} />
  {/if}
</div>

<style>
  .container {
    position: relative;
    width: 320px;
    height: 568px;
  }
</style>
