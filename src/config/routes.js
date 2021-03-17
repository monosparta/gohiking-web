/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'
import UnauthorizedRoute from 'base-shell/lib/components/UnauthorizedRoute/UnauthorizedRoute'
import { Route } from 'react-router-dom'

// const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp/SignUp'))
const PasswordReset = lazy(() => import('../pages/PasswordReset/PasswordReset'))
const About = lazy(() => import('../pages/About'))
const Home = lazy(() => import('../pages/Home/Home'))
const DialogDemo = lazy(() => import('../pages/DialogDemo/DialogDemo'))
const ToastDemo = lazy(() => import('../pages/ToastDemo/ToastDemo'))
const FilterDemo = lazy(() => import('../pages/FilterDemo'))
const ListPageDemo = lazy(() => import('../pages/ListPageDemo'))
const TabsDemo = lazy(() => import('../pages/TabsDemo'))
const MyAccount = lazy(() => import('../pages/MyAccount/MyAccount'))

const SignIn = lazy(() => import('../pages/HikingFrontend/SignIn'))
const Home3 = lazy(() => import('../pages/HikingFrontend/Home3'))
const Login1 = lazy(() => import('../pages/HikingFrontend/Login1'))
const Verify2 = lazy(() => import('../pages/HikingFrontend/Verify2'))
const Collection = lazy(() => import('../pages/HikingFrontend/Collection'))

const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'))
const SearchQuick = lazy(() => import('../pages/SearchQuick/SearchQuick'))
const SearchResult = lazy(() => import('../pages/SearchResult/SearchResult'))
const PrivacyPolicy = lazy(()=> import('../pages/PrivacyPolicy/PrivacyPolicy'))
const AboutUs =lazy(()=>import('../pages/AboutUs/AboutUs'))
const ColumnPage = lazy(() => import('../pages/ColumnPage/ColumnPage'))


const routes = [
  <UnauthorizedRoute path="/Login1" redirectTo="/" exact component={Login1} />,
  <UnauthorizedRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <UnauthorizedRoute path="/signup" redirectTo="/" exact component={SignUp} />,
  <UnauthorizedRoute path="/verify2" redirectTo="/" exact component={Verify2} />,
  <UnauthorizedRoute path="/Collection" redirectTo="/" exact component={Collection} />,
  <UnauthorizedRoute
    path="/password_reset"
    redirectTo="/"
    exact
    component={PasswordReset}
  />,
  
  <Route path="/searchPage" exact component={SearchPage} />,
  <Route path="/searchQuick/:id" exact component={SearchQuick} />,
  <Route path="/searchResult" exact component={SearchResult} />,
  <Route path="/privacyPolicy" exact component={PrivacyPolicy} />,
  <Route path="/aboutUs" exact component={AboutUs} />,
  <Route path="/Home" exact component={Home} />,
  <Route path="/about" exact component={About} />,
  <Route path="/columnPage" exact component={ColumnPage} />,
  <AuthorizedRoute path="/my_account" exact component={MyAccount} />,
  <AuthorizedRoute path="/home" exact component={Home} />,
  <UnauthorizedRoute path="/home_home3" exact component = {Home3}/>,

  <AuthorizedRoute path="/dialog_demo" exact component={DialogDemo} />,
  <AuthorizedRoute path="/toast_demo" exact component={ToastDemo} />,
  <AuthorizedRoute path="/filter_demo" exact component={FilterDemo} />,
  <AuthorizedRoute path="/list_page_demo" exact component={ListPageDemo} />,
  <AuthorizedRoute path="/tabs_demo" exact component={TabsDemo} />,
]

export default routes
