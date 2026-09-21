import { Appbar } from "../Components/Appbar";
import { Cards } from "../Components/CardsOrTasks";

function Boards() {
  return (
    <div>
        <Appbar />
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1", minHeight: "100vh", borderRight: "1px dotted black" }}>
            {/* Added unique ids */}
            <Cards id="c1" title="Card 1" description="This is first card" />
            <Cards id="c2" title="Card 2" description="This is another card" />
            <Cards id="c2" title="Card 2" description="This is another card" />
          </div>
          <div style={{ flex: "1", minHeight: "100vh", borderRight: "1px dotted black" }}>
            <Cards id="c3" title="Card 3" description="This is third card" />
            <Cards id="c2" title="Card 2" description="This is another card" />
          </div>
          <div style={{ flex: "1", minHeight: "100vh" }}>
            <Cards id="c4" title="Card 4" description="This is fourth card" />
          </div>
      </div>
    </div>
  );
}

export default Boards;
