<script>

</script>
<template>
   <div class="politika">
      <div class="px-10 max-md:px-5 container !mb-[72px]">
         <h1 class="text-[56px] max-md:text-[40px] leading-[64px] max-sm:text-[32px] max-md:leading-[40px]">{{
            $t('PrivacyPolicy') }}
         </h1>
         <h3 class="text-xl max-md:text-base mb-4 mt-10 font-bold">{{ $t('GeneralProvisions') }}</h3>
         <p class="text-base max-md:text-sm">{{ $t('GeneralProvisions1') }}</p>
         <p class="text-base max-md:text-sm" v-html="$t('GeneralProvisions2')"></p>
         <p class="text-base max-md:text-sm" v-html="$t('GeneralProvisions3')"></p>
         <p class="text-base max-md:text-sm" v-html="$t('GeneralProvisions4')"></p>
         <p class="text-base max-md:text-sm" v-html="$t('GeneralProvisions5')"></p>
         <p class="text-base max-md:text-sm" v-html="$t('GeneralProvisions6')"></p>
         <p class="text-base max-md:text-sm" v-html="$t('GeneralProvisions7')"></p>
         <br>
         <p class="text-base max-md:text-sm" v-html="$t('aboutPersonalData')"></p>
         <p class="text-base max-md:text-sm" v-html="$t('aboutPersonalData1')"></p>
         <p class="text-base max-md:text-sm" v-html="$t('aboutPersonalData2')"></p>
         <p class="text-base max-md:text-sm" v-html="$t('aboutPersonalData3')"></p>
         <p class="text-base max-md:text-sm" v-html="$t('aboutPersonalData4')"></p>
     
    
         <h3 class="text-xl max-md:text-base mb-4 mt-10 font-bold">{{ $t('listPersonalData') }}</h3>

         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1') }}</p>

         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1A') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1A1') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1A2') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1A3') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1A4') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1B') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1V') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1V1') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1V2') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1G') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1G1') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData1G2') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('listPersonalData5') }}</p> <br />
         <h3 class="text-xl max-md:text-base mb-4 mt-10 font-bold">{{ $t('personalInformation') }}</h3>

         <p class="text-base max-md:text-sm">{{ $t('personalInformation1') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation2') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation3') }}</p>
         <h3 class="text-xl max-md:text-base mb-4 mt-10 font-bold">{{ $t('personalInformation4') }}</h3>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation5') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation6') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation7') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation8') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation9') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation10') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation11') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation12') }}</p>
         <h3 class="text-xl max-md:text-base mb-4 mt-10 font-bold">{{ $t('personalInformation12') }}</h3>

         <p class="text-base max-md:text-sm">{{ $t('personalInformation13') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation14') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation15') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation16') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation17') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation18') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation19') }}</p>

         <h3 class="text-xl max-md:text-base mb-4 mt-10 font-bold">{{ $t('personalInformation20') }}</h3>

         <p class="text-base max-md:text-sm">{{ $t('personalInformation21') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation22') }}</p>

         <h3 class="text-xl max-md:text-base mb-4 mt-10 font-bold">{{ $t('personalInformation23') }}</h3>

         <p class="text-base max-md:text-sm">{{ $t('personalInformation24') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('personalInformation25') }}</p>

         <!-- <p class="text-base max-md:text-sm">{{ $t('PurposesCollectingTitle3') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('PurposesCollectingTitle4') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('PurposesCollectingTitle5') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('PurposesCollectingTitle6') }}</p>
         <p class="text-base max-md:text-sm">{{ $t('PurposesCollectingTitle7') }}</p> -->
      </div>
   </div>
</template>


<style>
p a {
   color: blue;
   cursor: pointer;
}
.politika p{
  margin-top: 4px;
}
</style>