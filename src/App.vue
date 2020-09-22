<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        CDO Global
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="text-center">
            <Loading/>
          </v-col>
          <v-col cols="12" md="6">
            <ResultInfo/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <MainFooter/>
  </v-app>
</template>

<script>
import MainFooter from "@/components/MainFooter";
import Loading from "@/components/Loading";
import ResultInfo from "@/components/ResultInfo";

export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  components: {
    MainFooter,
    Loading,
    ResultInfo
  }
}
</script>
