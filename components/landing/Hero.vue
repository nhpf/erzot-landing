<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-normal lg:tracking-tight">
        <b>Erzot</b> Software Solutions
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        We specialize in creating tailored software solutions for startups, enterprises, and organizations, enabling them to achieve their digital goals with agility and precision.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="/contact"
          rel="noopener"
          >Get Started</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="/about"
          >Learn More</LandingLink
        >
      </div>
    </div>
  </main>
</template>
