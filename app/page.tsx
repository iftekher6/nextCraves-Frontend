import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PostsList from "./components/PostsList";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <PostsList/>
      <Footer/>
      {/* <Search/> */}
    </div>
  );
}

