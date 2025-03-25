import { Outlet, useLoaderData } from "react-router";
import Layout from "./layouts/Layout";

const App = () => {
 
  const user = useLoaderData();
 
  return (
    <Layout
    user={user}>
      <Outlet />
 </Layout>
  )
}

export default App;