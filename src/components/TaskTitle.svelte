<script>
  export let title
  export let body
  
</script>

<div class="task-title">
    <span>{title}</span>
    <span>{body}</span>
</div>

<style>
  .task-title {
    padding: 10px 0;
    font-size: 14px;
    color: #495057;
    text-align: center;
    background-color: #fff;
  }
  .task-title span:first-child{
    font-weight: 700;
  }
  .task-title span:last-child{
    font-family: 400;
  }
</style>
