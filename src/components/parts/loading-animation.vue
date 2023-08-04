<template>
    <div>
      <div class="loading-container">
        <div class="loading-background"></div>
        <div class="loading-animation" ></div>
      </div>
    </div>
  </template>
  
  <style>
  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .loading-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9); /* Opacidade de 0.5 (50%) */
  }
  
  .loading-animation {
    width: 200px;
    height: 200px;
    border: 6px solid #ccc;
    border-top: 6px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  