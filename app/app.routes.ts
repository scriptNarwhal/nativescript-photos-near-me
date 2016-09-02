import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router";
import {MapComponent} from "./components/map-component/map.component";
import {ImagesListComponent} from "./components/imagesList-component/imagesList.component";

export const routes: RouterConfig = [
  { path: "", component: ImagesListComponent},
  // { path: "", component: MapComponent},
  { path: "images-list/:user_id", component: ImagesListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];