
document.addEventListener('DOMContentLoaded', function() {
  var botaoTamanho675 = document.getElementById('botao-encomendar-tamanho-675');
  var botaoTamanho13 = document.getElementById('botao-encomendar-tamanho-13');
  var botaoTamanho312 = document.getElementById('botao-encomendar-tamanho-312');
  var botaoTamanho10 = document.getElementById('botao-encomendar-tamanho-10');

  var campoSelecaoPilha = document.getElementById('input_186_6');

  if (botaoTamanho675 && campoSelecaoPilha) {
    botaoTamanho675.addEventListener('click', function() {
      var idOpcao = 'opcao_1_id';

      var opcao = campoSelecaoPilha.querySelector('option[id="' + idOpcao + '"]');
      if (opcao) {
        opcao.selected = true;

        // Dispara um evento "change" no campo de seleção para acionar a lógica do Gravity Forms
        var eventoChange = new Event('change');
        campoSelecaoPilha.dispatchEvent(eventoChange);
      }
    });
  }

  if (botaoTamanho13 && campoSelecaoPilha) {
    botaoTamanho13.addEventListener('click', function() {
      var idOpcao = 'opcao_2_id';

      var opcao = campoSelecaoPilha.querySelector('option[id="' + idOpcao + '"]');
      if (opcao) {
        opcao.selected = true;
        var eventoChange = new Event('change');
        campoSelecaoPilha.dispatchEvent(eventoChange);
      }
    });
  }

  if (botaoTamanho312 && campoSelecaoPilha) {
    botaoTamanho312.addEventListener('click', function() {
      var idOpcao = 'opcao_3_id';

      var opcao = campoSelecaoPilha.querySelector('option[id="' + idOpcao + '"]');
      if (opcao) {
        opcao.selected = true;
        var eventoChange = new Event('change');
        campoSelecaoPilha.dispatchEvent(eventoChange);
      }
    });
  }

  if (botaoTamanho10 && campoSelecaoPilha) {
    botaoTamanho10.addEventListener('click', function() {
      var idOpcao = 'opcao_4_id';

      var opcao = campoSelecaoPilha.querySelector('option[id="' + idOpcao + '"]');
      if (opcao) {
        opcao.selected = true;
        var eventoChange = new Event('change');
        campoSelecaoPilha.dispatchEvent(eventoChange);
      }
    });
  }
});

