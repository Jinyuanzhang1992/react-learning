import "./App.css";
import MyClock from "../src/my-clock/index";
import MyArticle from "./my-article/index";

function App() {
  return (
    <div className="container-fluid">
      <div className="App">
        <div className="row">
          <div className="col-md-9">
            <div className="jumbotron">
              <h1>头条文章</h1>
              <p>
                这是文章的内容。这是文章的内容。这是文章的内容。这是文章的内容。
              </p>
            </div>
            {/*可以通过 props 给组件传递任意参数，这是一个极其强大的机制 */}
            <MyArticle
              page={1}
              userInfo={{ userName: "Daniel", age: 18 }}
            ></MyArticle>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
