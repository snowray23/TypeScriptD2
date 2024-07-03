// Task 2: Implement the Card component in your main application, placing various content elements inside the card.
// Task 3: Experiment with different types of content within the Card component to understand the flexibility of children props.

import Card from "./interface/Card"

function App() {


  return (
    <>
   <div>
      <Card>
        <h3> Panda Card </h3>
      </Card>
      <Card>
        <img src="https://video.cgtn.com/news/3d3d514d7a6b544d33457a6333566d54/video/ab8d270da7074d32b6bd9399ccb1e676/ab8d270da7074d32b6bd9399ccb1e676.jpg" alt="Panda eating bamboo" />
        <p>Panda Eating Bamboo</p>
      </Card>
      <Card>
        <button>Click Me</button>
      </Card>
    </div>
    </>
  )
}

export default App
