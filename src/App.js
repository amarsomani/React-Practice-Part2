import React from "react";
import "./App.css";
import FRParentInput from './components/FRParentInput';
import Form from './components/Form';
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComponent from "./components/ParentComponent";
import RefsDemo from './components/RefsDemo';
import RefWithClassFocusInput from './components/RefWithClassFocusInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/ErrorLifeCycleMethods/Hero';
import ErrorBoundary from './components/ErrorLifeCycleMethods/ErrorBoundary';
import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
import HoverCounter from "./components/HigherOrderComponents/HoverCounter";
import Parent from './components/ContextExample/Parent';
import { UserProvider } from "./components/ContextExample/UserContext";
// import Parent from "./components/ContextExample/Parent";
// import Parent from './components/ContextExample_2/Parent';
// import { UserProvider } from './components/ContextExample_2/UserContext';
// import { UserProvider } from './components/ContextExample/UserContext';
import PostList from "./components/ReactHttp/PostList";
import PostForm from "./components/ReactHttp/PostForm";

function App() {
  // let obj = {
  //   id: 1,
  //   name: "Vishwas"
  // };

  let obj = [
    {
      id: 1,
      name: "Vishwas"
    },
    {
      id: 2,
      name: "Amar"
    }
  ];
  return (
    <div className="App">
      {/* <PostForm/> */}
      {/* <PostList/> */}
      {/* <UserProvider value="Vishwas">
        <Parent />
      </UserProvider> */}
      {/* <UserProvider value={obj}>
        <Parent />
      </UserProvider> */}
      <ClickCounter />
      <HoverCounter />
      {/* <ErrorBoundary>
        <Hero heroname='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Supermane"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Joker"/>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <RefWithClassFocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComponent /> */}
      {/* <Table/> */}
      {/* <Form/> */}
      {/* <LifecycleA/> */}
      {/* <FragmentDemo/> */}
    </div>
  );
}

export default App;
