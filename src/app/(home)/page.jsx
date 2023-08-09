import Categories from "./Categories";
import HeroSlider from "./HeroSlider";



export default function Home() {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <div className="w-9/12 mx-auto">
        <Categories></Categories>
      </div>
    </div>
  )
}
