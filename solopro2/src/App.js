
import './App.css';
import Card from "./Card";
import data from "./data";

function App() {
  const cards = data.map(item => {
    return (
        <Card 
              key={item.id}
               imageUrl={item.imageUrl}
               location={item.location}
               googleMapsUrl={item.googleMapsUrl}
               title={item.title}
               startDate={item.startDate}
               endDate={item.endDate}
               description={item.description}

        />
    )
})    
  // const cards = data.map(item =>{
  //   console.log(data);
  //   return (
  //     <Card 
  //        key={id}
  //        imageUrl={item.imageUrl}
  //        location={item.location}
  //        googleMapsUrl={item.googleMapsUrl}
  //        title={item.title}
  //        startDate={item.startDate}
  //        endDate={item.endDate}
  //        description={item.description}
  //     />
  //   )
  // })
  return (
    <div className="App">
     {cards}
    </div>
  );
}

export default App;
