<script setup>
import MainNavigation from '../components/MainNavigation.vue'
import HeaderMain from '../components/HeaderMain.vue'
import HopeSection from '../components/HopeSection.vue'
import ObjectiveItem from '../components/ObjectiveItem.vue'
import AnimatedComponent from '../components/AnimatedComponent.vue'
</script>

<template>
  <MainNavigation />
  <main>
    <HeaderMain />

    <div class="container">
      <HopeSection
        sectionId="objectives"
        title="Charitable Objectives"
        sectionDescription="Our charitable objectives are to:"
        :showButton="false"
      >
        <template v-slot:section-content>
          <AnimatedComponent>
            <ObjectiveItem
              objectiveDescription="Enhance medical education to raise awareness of disease states and
treatment options."
            />
          </AnimatedComponent>
          <AnimatedComponent>
            <ObjectiveItem
              objectiveDescription="Support clinical and scientific research to advance our understanding of
disease states and treatment methods."
            />
          </AnimatedComponent>
          <AnimatedComponent>
            <ObjectiveItem
              objectiveDescription="Provide educational opportunities in medical and scientific research for
underrepresented and economically disadvantaged individuals and groups.."
            />
          </AnimatedComponent>
          <AnimatedComponent>
            <ObjectiveItem
              objectiveDescription="Facilitate medical and interventions for marginalized communities."
            />
          </AnimatedComponent>
          <AnimatedComponent>
            <ObjectiveItem
              objectiveDescription="Deliver these activities at the local, national, and internaltional levels."
            />
          </AnimatedComponent>
        </template>
      </HopeSection>
      <HopeSection
        sectionId="our-beneficiaries"
        title="Our Beneficiaries"
        sectionDescription="Explore a section of the causes we support."
        :showButton="true"
        btnName="See all causes"
      />

      <HopeSection
        sectionId="our-team"
        title="Our Team"
        sectionDescription="The Hope Foundation is led by its board of trustees and run by a voluntary steering
committee responsible for soliciting initiatives for foundation support."
        :showButton="true"
        btnName="Meet the team"
      />
    </div>
  </main>
</template>

<style></style>
