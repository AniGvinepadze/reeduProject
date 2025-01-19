import RoadMapHeader from "../components/molecules/roadmapPage/RoadMapHeader";
import RoadMapList from "../components/molecules/roadmapPage/RoadMapList";
import RoadMapListMobile from "../components/molecules/roadmapPage/RoadMapListMobile";

export default function RoadMap() {
  return (
    <main className="container max-700:px-0">
      <RoadMapHeader />
      <div className="max-700:hidden">
        <RoadMapList />
      </div>
      <div className="hidden max-700:block">
        <RoadMapListMobile />
      </div>
    </main>
  );
}
