<script setup>
const features = [
  {
    title: "Custom Solutions for Every Business Need",
    description:
      "Web applications, data projects, and enterprise software tailored to your unique requirements.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Top-Notch Performance, Guaranteed",
    description:
      "Our optimized software ensures fast, reliable performance, giving your business a competitive edge.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Scalable and Flexible Architectures",
    description:
      "We create solutions designed to grow with your business, providing a future-proof digital foundation.",
    icon: "bx:bxs-data",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leverage advanced analytics and artificial intelligence to make smarter business decisions.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Proven Results",
    description:
      "We’ve helped businesses achieve digital transformation.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Team of Experts",
    description:
      "Designers, developers, and strategists working to deliver excellence.",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Everything you need to succeed in the digital world
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      We take the best parts of state-of-the-art technology and add our expertise to deliver results.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
