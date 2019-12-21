<template>
  <div id="app">
    <Header/>
    <main class="p-4">
      <div class="px-2">
        <div class="flex flex-wrap -mx-2">
          <VacationCard
            img="http://lorempixel.com/400/300/nature/"
            imgAlt="Beach in Cancun"
            eyebrow="Private Villa"
            title="Relaxing All-Inclusive Resort in Cancun"
            pricing="$299 USD per night"
            url="/vacations/cancun"
          />
          <VacationCard
            img="http://lorempixel.com/400/300/nature/"
            imgAlt="Beach in Cancun"
            eyebrow="Private Villa"
            title="Relaxing All-Inclusive Resort in Cancun"
            pricing="$299 USD per night"
            url="/vacations/cancun"
          />
          <VacationCard
            img="http://lorempixel.com/400/300/nature/"
            imgAlt="Beach in Cancun"
            eyebrow="Private Villa"
            title="Relaxing All-Inclusive Resort in Cancun"
            pricing="$299 USD per night"
            url="/vacations/cancun"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import VacationCard from './components/VacationCard.vue'

export default {
  name: 'app',
  components: {
    Header,
    VacationCard
  }
}
</script>