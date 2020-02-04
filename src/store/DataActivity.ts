import { VuexModule, mutation, action, getter, Module } from "vuex-class-component";
import { dataActivity } from "@/components/data";

//@Module({namespacedPath: "store/"})
export class DataActivity extends VuexModule {

 setOfActions = dataActivity.slice();

 get dataActions() {
    return this.setOfActions;
  }

}