# Misiones de Pepeland

Bienvenido al portal de misiones. Aquí podrás encontrar las misiones disponibles según tu código y descubrir tu próxima aventura.

<div class="button-container">
  <button id="mission-button" class="md-button md-button--primary">
    Acceder a misiones
  </button>
<a href="../../" class="md-button">
  Volver atrás
</a>
</div>

<!-- Modal de código (no tocar) -->
<div id="code-modal" class="custom-modal" hidden>
  <div class="custom-modal__container">
    <h3 class="custom-modal__title">Introduce tu código</h3>
    <input id="mission-code-input"
           type="text"
           placeholder="Codigo de faccion"
           class="custom-modal__input" />
    <div class="custom-modal__actions">
      <button id="code-submit"
              class="md-button md-button--primary">
        Enviar
      </button>
      <button id="code-cancel"
              class="md-button">
        Cancelar
      </button>
    </div>
  </div>
</div>
