<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact</template>
      <template v-slot:desc>Let’s Build the Future Together.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Contact the Erzot team
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          The next chapter of your business begins here. Let’s create innovative digital solutions that set you apart in your industry.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker" />
            <span>Porto, Portugal</span>
          </div>
<!--          <div class="flex items-center mt-2 space-x-2 text-gray-600">-->
<!--            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a-->
<!--              href="mailto:contact@erzot.com"-->
<!--              >contact@erzot.com</a-->
<!--            >-->
<!--          </div>-->
          <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:phone" /><a
              href="tel:+1 (234) 5678 999"
              >+1 (234) 5678 999</a
            >
          </div> -->
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
