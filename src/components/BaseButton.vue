<template>
    <button class="button-18" role="button">
        <slot></slot>
    </button>
</template>


<style scoped>

.button-18 {
  align-items: center;
  background-color: #FF8B00;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #FFF;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 35px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
}

.button-18:hover,
.button-18:focus { 
  background-color: #16437E;
  color: #ffffff;
}

.button-18:active {
  background: #09223b;
  color: rgb(255, 255, 255, .7);
}

.button-18:disabled { 
  cursor: not-allowed;
  background: rgba(0, 0, 0, .08);
  color: rgba(0, 0, 0, .3);
}

</style>