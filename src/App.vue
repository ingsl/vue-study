<template>
  <div id="app">
    <!--    <HeaderComponent title="Webchemist's Theme" />
    <h1>{{ welcome }}</h1> -->
    <SpecialBgComponent />
    <SectionNaverComponent />
    <ContainerComponent />
    <SectionFooterComponent />
  </div>
</template>

<script>
import SpecialBgComponent from "./components/SpecialBg";
import SectionNaverComponent from "./components/SectionNaver";
import ContainerComponent from "./components/Container";
import SectionFooterComponent from "./components/SectionFooter";
//import HeaderComponent from "./components/Header";

export default {
  name: "App",
  components: {
    SpecialBgComponent,
    SectionNaverComponent,
    ContainerComponent,
    SectionFooterComponent
    //   HeaderComponent,
  },
  data: () => {
    return {
      welcome: `Welcome`
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* padding-top: 50px; */
}
</style>
