<script>
document.addEventListener('DOMContentLoaded', () => {
  // Libera automaticamente o acesso ao sistema de palpites
  localStorage.setItem('privilegeAccess', 'true');

  // Se você tiver botões que chamam openPaymentModal, redefine eles para não fazer nada
  window.openPaymentModal = function () {
    console.log("Acesso já liberado. Pagamento desativado.");
  };

  // Se quiser esconder o botão de pagamento da interface, pode fazer isso aqui:
  const btnPagamento = document.querySelector('#botaoPagamento'); // Coloque o ID correto do botão
  if (btnPagamento) {
    btnPagamento.style.display = 'none';
  }

  // Se ainda tiver o modal do createModal sendo chamado, podemos também desativar ele:
  window.createModal = function () {
    console.log("Modal de venda desativado.");
  };
});
</script>
