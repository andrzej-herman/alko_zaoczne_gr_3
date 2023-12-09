import MainHeader from "@/components/MainHeader";
import Promotion from "@/components/Promotion";
import SearchBar from "@/components/SearchBar";
import Catalog from "@/components/Catalog";
import { getAlko} from "@/alko";

export default function Home() {


  const data  = getAlko();
  console.log(data);

  return (
   <div className="h-full flex flex-col items-center bg-white space-y-5 py-5">
    <MainHeader/>
    <Promotion />
    <SearchBar />
    <Catalog />

   </div>
  )
}
