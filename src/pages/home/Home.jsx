import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import Slider from "../sliderPage/Slider"
import Service from "../services/Service"
import Serve from "../serve/Serve"
import Table from "../table/Table"
import About from "../about/About"
import Contact from "../contact/Contact"
import Footer from "../footer/Footer"
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <div className="home">
        <Slider/>
        <Service/>
        <Posts posts={posts} />
        <About/>
        <Serve/>
        <Table/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
