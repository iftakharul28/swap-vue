<script lang="ts">
import Button from './Button.vue';
</script>
<template>
  <header class="h-20 z-20 fixed left-0 right-0 top-0 bg-white px-5 heder-shadow">
    <div class="container h-20 !mx-auto grid place-items-center">
      <div class="w-full flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Button type="link" class="h-12 pr-2" href="/"><SiteLogo /></Button>
          <div class="_2z2N5">
            <span class="text-secondary font-BasisGrotesqueProBold hover:text-primary cursor-pointer border-b-2 border-b-primary">Other</span>
            <span class="pl-2 text-sm font-BasisGrotesqueProLight font-normal text-secondary">Mumbai, Maharashtra, India</span>
          </div>
        </div>
        <nav class="flex items-center md:gap-4 xl:gap-10">
          <Button type="link" href="/search" class="flex items-center gap-1 group">
            <SearchIcon class="group-hover:fill-primary fill-secondary" />
            <span class="group-hover:text-primary text-secondary">Search</span>
          </Button>
          <Button type="link" href="/offer" class="flex items-center gap-1 group relative">
            <OfferIcon class="group-hover:fill-primary fill-secondary" />
            <span class="group-hover:text-primary text-secondary">Offers</span>
            <span class="text-[10px] absolute -right-6 -top-2 text-primary font-BasisGrotesqueProMedium">NEW</span>
          </Button>
          <Button type="link" class="flex items-center gap-1 group">
            <HelpIcon class="group-hover:fill-primary fill-secondary" />
            <span class="group-hover:text-primary text-secondary">Help</span>
          </Button>
          <Button type="button" class="flex items-center gap-1 group">
            <PersonIcon class="group-hover:fill-primary fill-secondary" />
            <span class="group-hover:text-primary text-secondary">Sign In</span>
          </Button>
          <Button type="link" href="/checkout" class="flex items-center gap-1 group">
            <div class="relative grid place-items-center">
              <CartIcon class="group-hover:stroke-primary stroke-secondary fill-white stroke-2" />
              <span class="absolute text-[10px] font-BasisGrotesqueProMedium">0</span>
            </div>
            <span class="group-hover:text-primary text-secondary">Cart</span>
          </Button>
        </nav>
      </div>
    </div>
  </header>
</template>
