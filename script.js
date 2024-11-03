<style>
  /* Стиль запроса */
  #placeholder {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: black;
    z-index: 9999; 
    overflow: hidden;
  }
  
  /* Отправка запроса */
  body.no-scroll {
    overflow: hidden;
  }
</style>

<div id="placeholder"></div></div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Включаем класс 
    document.body.classList.add('no-scroll');
    setTimeout(function() {
      var placeholder = document.getElementById('placeholder');
      if (placeholder) {
        placeholder.style.display = 'none';
        document.body.classList.remove('no-scroll');
      }
    }, 120000);
  });
</script>
