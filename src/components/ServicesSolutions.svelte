<script>
  import { EN, ES } from "../scripts/localizationContent";
  import { language } from "../scripts/stores";
</script>

<section class="font-bold bg-slate-100 text-gunmetal/70">
  <div class="flex flex-col px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl font-extrabold sm:text-4xl">
        {$language ? EN.servicesSolutions.h1 : ES.servicesSolutions.h1}
      </h1>
      <br />
      <p>
        {$language ? EN.servicesSolutions.p : ES.servicesSolutions.p}
      </p>
    </div>
    <br />
    <div
      class="flex flex-col w-full gap-4 mx-auto text-center md:text-left justify-evenly md:flex-row"
    >
      <div>
        <h2 class="text-3xl font-bold">
          {$language ? EN.servicesSolutions.h2a : ES.servicesSolutions.h2a}
        </h2>
        <ul class="md:pl-4">
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li1 : ES.servicesSolutions.li1}
          </li>
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li2 : ES.servicesSolutions.li2}
          </li>
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li3 : ES.servicesSolutions.li3}
          </li>
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li4 : ES.servicesSolutions.li4}
          </li>
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li5 : ES.servicesSolutions.li5}
          </li>
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li6 : ES.servicesSolutions.li6}
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-3xl font-bold">
          {$language ? EN.servicesSolutions.h2b : ES.servicesSolutions.h2b}
        </h2>
        <ul class="md:pl-4">
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li7 : ES.servicesSolutions.li7}
          </li>
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li8 : ES.servicesSolutions.li8}
          </li>
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li9 : ES.servicesSolutions.li9}
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-3xl font-bold">
          {$language ? EN.servicesSolutions.h2c : ES.servicesSolutions.h2c}
        </h2>
        <ul class="md:pl-4">
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li10 : ES.servicesSolutions.li10}
          </li>
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li11 : ES.servicesSolutions.li11}
          </li>
          <li class="md:list-disc">
            {$language ? EN.servicesSolutions.li12 : ES.servicesSolutions.li12}
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
