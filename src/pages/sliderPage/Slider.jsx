import React from "react";
import "./slider.css";

function Slider() {
  
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h3 className="home__text pz__10">WELCOME TO SAFE Development Group</h3>
              <h3 className="home__text sweet pz__10">Sustainable Agriculture Farming Enterprise (SAFE)</h3>
              <h2 className="home__text pz__10">A development consulting firm committed to quality support</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

// import { useEffect, useState } from "react";
// import Posts from "../../components/posts/Posts";
// import "./home.css";
// import axios from "axios";
// import { useLocation } from "react-router";

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const { search } = useLocation();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get("/posts" + search);
//       setPosts(res.data);
//     };
//     fetchPosts();
//   }, [search]);
//   return (
//     <>
//       <div className="home">
//         <Posts posts={posts} />
//       </div>
//     </>
//   );
// }