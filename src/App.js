import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SpecificVideos from "./components/SpecificVideos";
import Demo from "./components/Demo";
import MainSidebar from "./components/MainSidebar";
import ErrorFallback from "./components/ErrorFallback";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="fixed top-0 bg-white z-10 w-full">
          <Head />
        </div>
        <div className="relative mt-32 mx-4 overflow-y-auto">
          <MainSidebar />
          <Body />
        </div>
      </>
    ),
    errorElement: <h1>Oops!!</h1>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
      {
        path: "results",
        element: <SpecificVideos />,
        errorElement: <div>Oops!Spec video isn't working!</div>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorFallback />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      {/* <div className="fixed top-0 w-full z-10 bg-white">
        <Head />
      </div> */}
      {/* relative mt-32 mx-4 overflow-y-auto */}
      <div className="">
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
