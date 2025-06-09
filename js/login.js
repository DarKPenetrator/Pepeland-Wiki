document.addEventListener('DOMContentLoaded', () => {
  const routes = {
    'ALPHA': '../CoalicionMisiones',
    'BETA':  '../MagiaMisiones',
    // añade más códigos si los tienes
  };

  const btn = document.getElementById('mission-button');
  const modal = document.getElementById('code-modal');
  const input = document.getElementById('mission-code-input');
  const submit = document.getElementById('code-submit');
  const cancel = document.getElementById('code-cancel');

  if (!btn || !modal || !input || !submit || !cancel) return;

  // Mostrar modal al pulsar el botón
  btn.addEventListener('click', () => {
    sessionStorage.removeItem('missionCode');
    input.value = '';
    modal.hidden = false;
    input.focus();
  });

  // Enviar código
  submit.addEventListener('click', handleCode);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleCode();
  });

  // Cancelar
  cancel.addEventListener('click', () => {
    modal.hidden = true;
  });

  function handleCode() {
    const raw = input.value.trim().toUpperCase();
    if (!raw) {
      return alert('Necesitas un código válido.');
    }
    if (routes[raw]) {
      sessionStorage.setItem('missionCode', raw);
      window.location.href = routes[raw];
    } else {
      alert('Código inválido. Inténtalo de nuevo.');
      input.select();
    }
  }
});
