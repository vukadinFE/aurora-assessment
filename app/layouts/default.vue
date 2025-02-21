<template>
  <div>
    <AppHeader />
    <slot />
    <PurchaseModal />
    <VideoModal />
    <footer class="text-center pt-30 pb-10">
      <UButton
        variant="link"
        href="mailto:vukadin92fe@gmail.com?subject=Your Aurora Assessment is Awesome"
        >Reach me out</UButton
      >
    </footer>
  </div>
</template>
