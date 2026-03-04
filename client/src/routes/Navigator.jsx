import { Routes, Route } from "react-router-dom";
import storage from "../storage/localStorage";

const Navigator = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <a href="/signin">to auth</a>
            <button
              onClick={() => {
                document.documentElement.dataset.theme = "telegram";
                storage.set("theme", "telegram");
              }}
            >
              telega
            </button>
            <button
              onClick={() => {
                document.documentElement.dataset.theme = "default";
                storage.set("theme", "default");
              }}
            >
              default
            </button>
          </div>
        }
      />
      {/* <Route path="/landing" element={<LandingPage />} />

      <Route path="/workspace/*">
        <Route
          path=":workSpaceId/*"
          element={
            <Layout>
              <WorkSpacePage />
            </Layout>
          }
        />
      </Route> */}

      <Route path="*" element={<h1>error</h1>} />
    </Routes>
  );
};

export default Navigator;
