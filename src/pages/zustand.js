/** @jsxImportSource theme-ui */

import { useStore } from "../../state/store";

const ZustandPage = () => {
  const bears = useStore((state) => state.bears);
  console.log(bears);
  const increasePopulation = useStore((state) => state.increasePopulation);

  const handleAddBear = () => {
    increasePopulation();
  };

  return (
    <div>
      <div
        sx={{
          width: "100vw",
          height: "calc(100vh - 50px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>zustand</h1>
        <button onClick={handleAddBear}>addBear</button>
      </div>
    </div>
  );
};

export default ZustandPage;
