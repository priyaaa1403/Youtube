import Header from "./components/Header";
import Body from "./components/Body";
import appStore from "./utils/store";
import { Provider } from "react-redux";
import Main from "./components/Main";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
   
  const appRouter =  createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Main/>
        },
        {
          path:"watch",
          element:<WatchPage/>  
        }
      ]
    }
  ])


  return (
       <Provider store={appStore}>
             <div className="App">
                 <Header/>
                <RouterProvider router = {appRouter}/>  
             </div>
      </Provider>
  );
}

export default App;
