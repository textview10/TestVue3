import Vue from 'vue'
import Router from 'vue-router'
import ChildComponent from "@/components/ChildComponent";
import SecondComponent from "@/components/SecondComponent";

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: "/ChildComponent",
      name: "ChildComponent",
      component: ChildComponent
    },
    {
      path: "/SecondComponent",
      name: "SecondComponent",
      component: SecondComponent
    }
  ]
})
