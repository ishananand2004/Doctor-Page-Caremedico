import {DoctorProfile} from "./components/modules/ui/patterns/DoctorProfile";
import {RightDoctor} from "./components/modules/ui/patterns/RightDoctor";
import SearchBar from "./components/modules/ui/patterns/SearchBar";

export default function Home() {
  return <main className="bg-[#fff] text-[#000]">
    <SearchBar/>
    {/* <DoctorProfile/> */}
    {/* <RightDoctor /> */}
  </main>;
}
