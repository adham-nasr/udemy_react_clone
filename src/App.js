import './App.css';
import Card from './Card';

function App() {
  const data = [  
	  { "id": 1,
		  "title": "python from zero to hero",
			"author": "maximlian" ,
			"image":"https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg"
	  } ,
	  { "id": 2,
		  "title": "python from zero to hero",
			"author": "stephen" ,
			"image":"https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg"
	  },
      { "id": 3,
		  "title": "python from zero to hero",
			"author": "maximlian" ,
			"image":"https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg"
	  } ,
	  { "id": 4,
		  "title": "python from zero to hero",
			"author": "Stephen" ,
			"image":"https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg"
	  } ,
	  { "id": 5,
		  "title": "python from zero to hero",
			"author": "Maximlian" ,
			"image":"https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg"
	  } ,
	  { "id": 6,
		  "title": "python from zero to hero",
			"author": "Stephen" ,
			"image":"https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg"
	  }
	];  
  return (
    <div className="App">
      <Card {...data[0]}/>
    </div>
  );
}

export default App;
