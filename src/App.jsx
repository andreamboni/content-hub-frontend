import "./App.css";
import Feed from "./components/Feed";
import Library from "./components/Library";
import Notes from "./components/Notes";
import posts from "./data/blogPostList.json";

function App() {
  return (
    <>
      <Feed posts={posts} />
      <Notes />
      <Library />
    </>
  );
}

export default App;
