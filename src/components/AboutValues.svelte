<script>
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
</script>

<section class="font-bold text-slate-600 bg-slate-100">
  <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold sm:text-4xl">
        {$language ? EN.aboutValues.h2 : ES.aboutValues.h2}
      </h2>
    </div>
    <dl
      class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 lg:gap-x-8"
    >
      <div class="flex">
        <div class="ml-3">
          <dt class="text-2xl font-bold">
            {$language ? EN.aboutValues.dt1 : ES.aboutValues.dt1}
          </dt>
          <dd class="text-gunmetal/60">
            {$language ? EN.aboutValues.dd1 : ES.aboutValues.dd1}
          </dd>
        </div>
      </div>
      <div class="flex">
        <div class="ml-3">
          <dt class="text-2xl font-bold">
            {$language ? EN.aboutValues.dt2 : ES.aboutValues.dt2}
          </dt>
          <dd class="text-gunmetal/60">
            {$language ? EN.aboutValues.dd2 : ES.aboutValues.dd2}
          </dd>
        </div>
      </div>
      <div class="flex">
        <div class="ml-3">
          <dt class="text-2xl font-bold">
            {$language ? EN.aboutValues.dt3 : ES.aboutValues.dt3}
          </dt>
          <dd class="text-gunmetal/60">
            {$language ? EN.aboutValues.dd3 : ES.aboutValues.dd3}
          </dd>
        </div>
      </div>
      <div class="flex">
        <div class="ml-3">
          <dt class="text-2xl font-bold">
            {$language ? EN.aboutValues.dt4 : ES.aboutValues.dt4}
          </dt>
          <dd class="text-gunmetal/60">
            {$language ? EN.aboutValues.dd4 : ES.aboutValues.dd4}
          </dd>
        </div>
      </div>
      <div class="flex">
        <div class="ml-3">
          <dt class="text-2xl font-bold">
            {$language ? EN.aboutValues.dt5 : ES.aboutValues.dt5}
          </dt>
          <dd class="text-gunmetal/60">
            {$language ? EN.aboutValues.dd5 : ES.aboutValues.dd5}
          </dd>
        </div>
      </div>
      <div class="flex">
        <div class="ml-3">
          <dt class="text-2xl font-bold">
            {$language ? EN.aboutValues.dt6 : ES.aboutValues.dt6}
          </dt>
          <dd class="text-gunmetal/60">
            {$language ? EN.aboutValues.dd6 : ES.aboutValues.dd6}
          </dd>
        </div>
      </div>
    </dl>
  </div>
</section>
