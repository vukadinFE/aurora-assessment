<template>
  <div class="app-hero">
    <UContainer class="flex flex-col items-center justify-center gap-4">
      <h1
        class="text-5xl font-bold tracking-tight text-white sm:text-7xl text-center mb-5"
      >
        <span
          ><span class="text-primary">Aurora Movies</span> Assessment<br />

          <span class="text-lg leading-relaxed tracking-wide">
            by Vukadin Nedeljković</span
          ></span
        >
      </h1>
      <UButton class="px-5" size="xl" to="#movies"
        >See movie list</UButton
      ></UContainer
    >
    <div class="absolute inset-0 z-10 pointer-events-none">
      <div class="film">
        <div class="effect">
          <div class="grain" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@reference "tailwindcss";
.app-hero {
  @apply relative flex items-center justify-center gap-4 h-screen overflow-hidden;
}
.app-hero::after {
  @apply content-[''] absolute inset-0 z-20 pointer-events-none;
  box-shadow: inset 5vw 5vw 200px 20px var(--ui-bg),
    inset -5vw -5vw 200px 20px var(--ui-bg);
}
.film,
.effect {
  @apply w-full h-full;
  filter: blur(0.45px) drop-shadow(0px 0px 0px #fff1);
}

.film:after,
.effect:after {
  @apply content-[''] w-[120%] h-full absolute top-0 left-0 opacity-[0.5] pl-[100px];
  animation: film-scratch 0.45s steps(1) infinite;
  background: repeating-linear-gradient(
    90deg,
    #fff1 0 2px,
    transparent 4px 37vmin
  );
}

.effect:after {
  @apply left-[30%];
  animation: effect-scratch 2s infinite;
}

.grain {
  @apply w-full h-full;
}

.grain:after {
  @apply content-[''] w-[110%] h-[110%] absolute top-[-5%] left-[-5%] opacity-[0.25];
  background-image: repeating-conic-gradient(
      #fff 0%,
      transparent 0.00003%,
      transparent 0.0005%,
      transparent 0.00095%
    ),
    repeating-conic-gradient(
      #fff 0%,
      transparent 0.00005%,
      transparent 0.00015%,
      transparent 0.0009%
    );
  animation: grain 0.5s steps(1) infinite;
  filter: drop-shadow(0px 0px 1px black);
}

@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-1%, -1%);
  }
  20% {
    transform: translate(1%, 1%);
  }
  30% {
    transform: translate(-2%, -2%);
  }
  40% {
    transform: translate(3%, 3%);
  }
  50% {
    transform: translate(-3%, -3%);
  }
  60% {
    transform: translate(4%, 4%);
  }
  70% {
    transform: translate(-4%, -4%);
  }
  80% {
    transform: translate(2%, 2%);
  }
  90% {
    transform: translate(-3%, -3%);
  }
}

@keyframes film-scratch {
  0%,
  100% {
    transform: translateX(0);
    opacity: 0.5;
  }
  10% {
    transform: translateX(-1%);
  }
  20% {
    transform: translateX(1%);
  }
  30% {
    transform: translateX(-2%);
    opacity: 0.75;
  }
  40% {
    transform: translateX(3%);
  }
  50% {
    transform: translateX(-3%);
    opacity: 0.5;
  }
  60% {
    transform: translateX(8%);
  }
  70% {
    transform: translateX(-3%);
  }
  80% {
    transform: translateX(10%);
    opacity: 0.25;
  }
  90% {
    transform: translateX(-2%);
  }
}

@keyframes effect-scratch {
  0% {
    transform: translateX(0);
    opacity: 0.75;
  }
  10% {
    transform: translateX(-1%);
  }
  20% {
    transform: translateX(1%);
  }
  30% {
    transform: translateX(-2%);
  }
  40% {
    transform: translateX(3%);
  }
  50% {
    transform: translateX(-3%);
    opacity: 0.5;
  }
  60% {
    transform: translateX(8%);
  }
  70% {
    transform: translateX(-3%);
  }
  80% {
    transform: translateX(10%);
    opacity: 0.25;
  }
  90% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(30%);
  }
}
</style>
