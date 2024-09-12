import Header from "./Header";
import AboutMe from "./AboutMe";

export default function Home() {
  return (
    <main>
      <Header/>
      <AboutMe/>
      <img className="potrait" src="https://i.imgur.com/8Km9tLL.jpg" alt="potrait"/>
    </main>
  );
}
