import { useState, useEffect } from "react";
import postListMock from "../my-article/post-list.mock.json";
import { clear } from "@testing-library/user-event/dist/clear";

function MyArticle(props) {
  const { page, userInfo } = props;
  console.log("page: ", page);
  console.log("userInfo: ", userInfo);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPostList(postListMock);
    }, 1000);
    // 按照毫秒即使，1000 毫秒就是 1 秒钟

    const timer2 = setTimeout(() => {
      postListMock.push({
        id: 6,
        title: "第十八篇文章",
        updateTime: "2021-08-01 12:00:00",
      });
      setPostList([...postListMock]);
      // 通过 setPostList 方法更新 postList 的值，这样 React 就会重新渲染组件， 不用等上面的自动更新
    }, 1000);

    // 清除定时器
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <ul className="list-group">
      {postList.map((post) => (
        <li className="list-group-item" key={post.id}>
          <div className="d-flex justify-content-between">
            <span>{post.title}</span>
            <span>{post.updateTime}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MyArticle;
