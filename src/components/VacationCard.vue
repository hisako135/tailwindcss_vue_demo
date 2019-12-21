<template>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2">
    <div class="p-2 rounded border border-gray-300">
      <div class="flex justify-center">
        <img class="rounded" :src="img" :alt="imgAlt">
      </div>
      <div class="my-2">
        <div>
          <div class="text-xs text-gray-600 uppercase font-bold">{{ eyebrow }}</div>
          <div class="font-bold text-gray-700 leading-snug">
            <a :href="url" class="hover:underline">{{ title }}</a>
          </div>
          <div class="mt-2 text-sm text-gray-600">{{ pricing }}</div>
        </div>
      </div>
      <button class="btn-teal">
        Button
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['img', 'imgAlt', 'eyebrow', 'title', 'pricing', 'url']
  }
</script>