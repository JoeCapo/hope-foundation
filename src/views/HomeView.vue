<script setup>
import MainNavigation from '../components/MainNavigation.vue'
import HeaderMain from '../components/HeaderMain.vue'
import HopeSection from '../components/HopeSection.vue'
import ObjectiveItem from '../components/ObjectiveItem.vue'
</script>

<template>
  <MainNavigation />
  <main>
    <HeaderMain :has-divider="true"/>

      <HopeSection
        sectionId="objectives"
        :has-divider="false"
        title="Charitable Objectives"
        sectionDescription="Our charitable objectives are to:"
        :showButton="false"
      >
        <template v-slot:section-content>
            <ObjectiveItem
              objectiveDescription="Enhance medical education to raise awareness of disease states and
treatment options.">
              <template v-slot:stamp-image>
                <img src="@/assets/images/stamps/stamp-education.svg"  class="img-fluid mb-3 mb-md-0" alt="objective stamp" />
              </template>
            </ObjectiveItem>

            <ObjectiveItem
              objectiveDescription="Support clinical and scientific research to advance our understanding of
disease states and treatment methods.">
              <template v-slot:stamp-image>
                <img src="@/assets/images/stamps/stamp-progress.svg"  class="img-fluid mb-3 mb-md-0" alt="objective stamp" />
              </template>
            </ObjectiveItem>

            <ObjectiveItem
              objectiveDescription="Provide educational opportunities in medical and scientific research for
underrepresented and economically disadvantaged individuals and groups..">
              <template v-slot:stamp-image>
                <img src="@/assets/images/stamps/stamp-opportunity.svg"  class="img-fluid mb-3 mb-md-0" alt="objective stamp" />
              </template>
            </ObjectiveItem>

          <ObjectiveItem
              objectiveDescription="Facilitate medical and interventions for marginalized communities.">
            <template v-slot:stamp-image>
              <img src="@/assets/images/stamps/stamp-health.svg"  class="img-fluid mb-3 mb-md-0" alt="objective stamp" />
            </template>
          </ObjectiveItem>

            <ObjectiveItem
              objectiveDescription="Deliver these activities at the local, national, and internaltional levels.">
              <template v-slot:stamp-image>
                <img src="@/assets/images/stamps/stamp-hope.svg"  class="img-fluid mb-3 mb-md-0" alt="objective stamp" />
              </template>
            </ObjectiveItem>
        </template>
      </HopeSection>
      <HopeSection
        sectionId="our-beneficiaries"
        :has-divider="true"
        title="Our Beneficiaries"
        sectionDescription="Explore a section of the causes we support."
        :showButton="true"
        btnName="See all causes"
        modalId="beneficiaries">

        <template v-slot:section-content>
          <div class="beneficiaries p-md-3">
            <div class="beneficiary-logo">
              <img src="@/assets/images/beneficiaries/beacon-for-rare-diseases.png" alt="Beacon for Rare Diseases">
            </div>
            <div class="beneficiary-logo">
              <img src="@/assets/images/beneficiaries/calm.png" alt="CALM">
            </div>
            <div class="beneficiary-logo">
              <img src="@/assets/images/beneficiaries/cancer-research-uk.png" alt="Cancer Research UK">
            </div>
            <div class="beneficiary-logo">
              <img src="@/assets/images/beneficiaries/caringkind.png" alt="Caringkind">
            </div>
            <div class="beneficiary-logo">
              <img src="@/assets/images/beneficiaries/chestnut-tree-house.png" alt="Chestnut Tree House">
            </div>
            <div class="beneficiary-logo">
              <img src="@/assets/images/beneficiaries/deirdres-house.png" alt="Deirdres House">
            </div>
            <div class="beneficiary-logo">
              <img src="@/assets/images/beneficiaries/direct-relief.png" alt="Direct Relief">
            </div>
            <div class="beneficiary-logo">
              <img src="@/assets/images/beneficiaries/mad-aid-uk.png" alt="Mad Aid UK">
            </div>
          </div>
        </template>
        <template v-slot:modal-content>
          <div class="beneficiaries">
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/beacon-for-rare-diseases.png" class="img-fluid" alt="Beacon for Rare Diseases">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/calm.png" class="img-fluid" alt="CALM">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/cancer-research-uk.png" class="img-fluid" alt="Cancer Research UK">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/caringkind.png" class="img-fluid" alt="Caringkind">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/chestnut-tree-house.png" class="img-fluid" alt="Chestnut Tree House">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/deirdres-house.png" class="img-fluid" alt="Deirdres House">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/direct-relief.png" class="img-fluid" alt="Direct Relief">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/mad-aid-uk.png" class="img-fluid" alt="Mad Aid UK">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/pcna.png" class="img-fluid" alt="PCNA">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/project-hope.png" class="img-fluid" alt="Project Hope">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/significance-of-one.png" class="img-fluid" alt="Significance of One">
          </div>
          <div class="beneficiary-logo">
            <img src="@/assets/images/beneficiaries/yeryuzu-doktorlari.png" class="img-fluid" alt="Yeryuzu Doktorlari">
          </div>
          </div>
        </template>
      </HopeSection>
      <HopeSection
        sectionId="our-team"
        :has-divider="true"
        title="Our Team"
        sectionDescription="The Hope Foundation is led by its board of trustees and run by a voluntary steering
committee responsible for soliciting initiatives for foundation support."
        :showButton="true"
        btnName="Meet the team"
      />
  </main>
</template>

<style>
.beneficiaries {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 1rem;
  margin: 0 4rem 4rem;
}

.beneficiaries .beneficiary-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 2rem;
}

.beneficiaries .beneficiary-logo img {
  display: block;
  max-width: 100%;
  //object-fit: contain;
  mix-blend-mode: multiply;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .beneficiaries {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 0 2rem;
  }

  .beneficiaries .beneficiary-logo img {
    display: block;
    max-width: 100%;
  //object-fit: contain;
    mix-blend-mode: multiply;
  }
}
</style>
