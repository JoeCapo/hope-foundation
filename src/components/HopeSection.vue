<script setup>
defineProps([
    'sectionId',
    'hasDivider',
    'title',
    'sectionDescription',
    'btnName',
    'showButton',
    'linkName',
    'modalId',
])
</script>

<template>
  <div class="background">
    <hr v-if="hasDivider" class="hr">
    <div class="container">
      <section :id="sectionId" class="d-flex flex-column">
        <div class="section-title">
          <h2>{{ title }}</h2>
          <p>{{ sectionDescription }}</p>
        </div>

        <slot name="section-content"></slot>

        <button name="section-button"
                type="button"
                class="btn rounded-pill align-self-center fs-4"
                v-if="showButton"
                data-bs-toggle="modal"
                :data-bs-target="'#' + modalId">
          {{ btnName }}
        </button>
        <a href="" v-if="showButton" class="fs-4">{{ linkName }}</a>
      </section>

      <!-- Modal -->
      <div class="modal fade" :id="modalId" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <!-- Modal content here -->
              <slot name="modal-content"></slot>
            </div>
            <div class="modal-footer d-flex justify-content-center border-0">
              <button type="button" class="btn rounded-pill fs-4" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.background:nth-child(odd) {
  background-color: #e3e3e3;
  border-radius: 30px;
}

section {
  padding: 0rem 0 5rem;
}

.container {
  width: 100vw;
}

section .btn, .modal .btn {
  background-color: #7119f4;
  color: #FFFFFF;
  width: 25vw;
}

section .section-title {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  section {
    padding: 0rem 0 2rem;
  }

  section .btn, .modal .btn {
    background-color: #7119f4;
    color: #FFFFFF;
    width: 100%;
  }

  section .section-title {
    margin-bottom: 1rem;
  }
}
</style>
