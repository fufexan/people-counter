import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '@/components/employee/SignIn'
import SignUp from '@/components/employee/SignUp'
import Dashboard from '@/components/employee/Dashboard'
import p404 from '@/components/404'

Vue.use(Router)

let isSignedIn = false;
let rootPath = SignUp
if (isSignedIn) {
  //rootPath = Dashboard
}

export default new Router ({
  routes: [
    { path: '/', name: rootPath.toString(), component: rootPath },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/tv', name: 'TV Display', /* component: TV */ },
    { path: '/SignIn', name: 'Sign In', component: SignIn },
    { path: '/SignUp', name: 'Sign Up', component: SignUp },
    { path: '*', name: '404', component: p404 },
  ]
})

