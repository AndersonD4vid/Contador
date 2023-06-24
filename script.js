let contador = 0;
const valor = document.querySelector("#number");
const botoes = document.querySelectorAll(".botao");

// gerando um loop de todos os botões que contêma class .botao
botoes.forEach(function (btn) {
   btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.classList);
      const styles = e.currentTarget.classList;
      if (styles.contains('diminuir')) {
         // não permitir que o contador diminua menos que 0
         if (contador == 0) {
            contador = 0;
         } else {
            contador--;
         }
      } else if (styles.contains('zerar')) {
         contador = 0;
      } else if (styles.contains('aumentar')) {
         contador++;
      }

      // alterando a cor do contador de acordo com o valor
      { contador > 0 ? valor.style.color = 'green' : valor.style.color = 'red' }

      // passando as atualizações ao contador
      valor.textContent = contador;
   });
});