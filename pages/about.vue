<script setup>
definePageMeta({
  layout: "landing",
});

const TeamImg1 = "https://source.unsplash.com/IF9TK5Uy-KI";
const TeamImg2 = "https://source.unsplash.com/iEEBWgY_6lA";
const TeamImg3 = "https://source.unsplash.com/ZHvM3XIOHoE";

const team = [
  {
    name: "Janette Lynch",
    title: "Senior Director",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
  },
  {
    name: "Marcell Ziemann",
    title: "Principal Strategist",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
    },
  },
  {
    name: "Robert Palmer",
    title: "Marketing Engineer",
    avatar: {
      src: TeamImg3,
      width: 580,
      height: 580,
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>About</template>
      <template v-slot:desc>Let’s Build the Future Together.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Empowering the world with technology.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Since 2018, we’ve been delivering cutting-edge software and design solutions to solve unique challenges.
        With a commitment to excellence, we combine agile management, creative design, and state-of-the-art technology to drive your business growth.
      </p>
    </div>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Our Expertise - Discovery & Strategy
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        We kick off every project with a comprehensive analysis and planning phase.
        This ensures we identify all requirements, map out your needs, and craft the best strategies for success. Our services include:
      </p>
      <ul class="text-lg leading-relaxed text-slate-500 ml-10" style="list-style-type:circle !important;">
        <li>Digital Strategy</li>
        <li>Technical Assessments</li>
        <li>Product Strategy</li>
        <li>User Experience (UX) Research</li>
        <li>Prototyping</li>
        <li>Innovation Committees</li>
      </ul>
    </div>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Our Expertise - Design & Development
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        We excel at rapidly delivering functional and impactful digital solutions. Whether it's a Minimum Viable Product (MVP) or a fully scalable application, our team works efficiently to ensure on-time delivery without compromising quality. Key services include:
      </p>
      <ul class="text-lg leading-relaxed text-slate-500 ml-10" style="list-style-type:circle !important;">
        <li>MVP Development</li>
        <li>Product Launches</li>
        <li>UX/UI Design</li>
        <li>Full-Stack Web & Mobile Development</li>
        <li>API Integrations</li>
        <li>Data Analytics & Artificial Intelligence</li>
        <li>Cloud-Based Solutions</li>
      </ul>
    </div>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Dedicated Teams
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        We don’t stop after your product launch. For long-term growth, we offer a dedicated multidisciplinary team to continuously evolve your solution. We ensure the sustainability and scalability of your technology while identifying new opportunities for expansion. Our services include:
      </p>
      <ul class="text-lg leading-relaxed text-slate-500 ml-10" style="list-style-type:circle !important;">
        <li>Accelerated Product Evolution</li>
        <li>Allocation of Expert Talent</li>
        <li>Maintenance, Support, and Upgrades</li>
        <li>Seamless Collaboration</li>
      </ul>
      <p class="text-lg leading-relaxed text-slate-500">
        Your goals become ours, and we work hand-in-hand to ensure your success.
      </p>
    </div>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Why Choose Us?
      </h2>
      <ul class="text-lg leading-relaxed text-slate-500 ml-10" style="list-style-type:circle !important;">
        <li>+15 Successful Projects</li>
        <li>+10 Satisfied Clients</li>
        <li>Proven expertise in Education, e-Commerce, AI & Data Projects</li>
        <li>HQ in Porto, Portugal, serving clients worldwide</li>
      </ul>
    </div>
<!--    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">-->
<!--      <div v-for="item of team" class="group">-->
<!--        <div class="w-full aspect-square">-->
<!--          <img-->
<!--            :src="item.avatar.src"-->
<!--            :width="item.avatar.width"-->
<!--            :height="item.avatar.height"-->
<!--            format="avif"-->
<!--            alt="Team"-->
<!--            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"-->
<!--          />-->
<!--        </div>-->

<!--        <div class="mt-4 text-center">-->
<!--          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>-->
<!--          <h3 class="text-sm text-slate-500">{{ item.title }}</h3>-->
<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; {-->
<!--        team.map((item) => (-->
<!--          <div class="group">-->
<!--            <div class="w-full aspect-square">-->
<!--              <Image-->
<!--                {...item.avatar}-->
<!--                format="avif"-->
<!--                alt="Team"-->
<!--                class="w-full h-full object-cover rounded transition  group-hover:-translate-y-1 group-hover:shadow-xl"-->
<!--              />-->
<!--            </div>-->

<!--            <div class="mt-4 text-center">-->
<!--              <h2 class="text-lg text-gray-800"> {item.name}</h2>-->
<!--              <h3 class="text-sm text-slate-500"> {item.title}</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        ))-->
<!--      } &ndash;&gt;-->
<!--    </div>-->
  </LandingContainer>
</template>
