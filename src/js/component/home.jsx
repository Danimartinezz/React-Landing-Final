import React from "react";
import Jumbotron  from "./Jumbotron.jsx";
import NavBar from "./Thenavbar.jsx";
import CardBox from "./Card.jsx";
import Footer from "./Piepagina.jsx";


// import Footer from "/workspace/react-hello/src/js/component/Footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const mySuperStyles = {
    width: "80%"
};
const Home = () => {
	return (
		<div>
        <NavBar/>
        <div className="container-fluid" style={mySuperStyles}>
            <Jumbotron />
            <CardBox />
        </div>
        <Footer />
    </div>
	);
};

export default Home;











// create your first component
// const Home = () => {
// 	return (
// 		<div>
// 				<NavBar />
// 				<div className="mx-5 my-5 px-5 pt-5">
// 					<Jumbotron />
// 					<div className="row text-center">
// 						<div className="col-sm-3">
// 							<Card
// 								imageUrl="https://via.placeholder.com/500x325"
// 								cardTitle="Card Title"
// 								content="It is a long established fact that a reader 
// 							will be distracted by the readable content of a page when 
// 							looking at its layout."
// 								url="#"
// 								label="Find Out More!"
// 							/>
// 						</div>
// 						<div className="col-sm-3">
// 							<Card
// 								imageUrl="https://via.placeholder.com/500x325"
// 								cardTitle="Card Title"
// 								content="There are many variations of passages of 
// 							Lorem Ipsum available, but the majority have suffered 
// 							alteration in some form, "
// 								url="#"
// 								label="Find Out More!"
// 							/>
// 						</div>
// 						<div className="col-sm-3">
// 							<Card
// 								imageUrl="https://via.placeholder.com/500x325"
// 								cardTitle="Card Title"
// 								content="Lorem ipsum dolor sit amet, consectetur 
// 							adipiscing elit, sed do eiusmod tempor incididunt ut labore 
// 							et dolore magna aliqua."
// 								url="#"
// 								label="Find Out More!"
// 							/>
// 						</div>
// 						<div className="col-sm-3">
// 							<Card
// 								imageUrl="https://via.placeholder.com/500x325"
// 								cardTitle="Card Title"
// 								content="Lorem ipsum dolor sit amet, consectetur 
// 								adipiscing elit, sed do eiusmod tempor incididunt ut labore 
// 								et dolore magna aliqua."
// 								url="#"
// 								label="Find Out More!"
// 							/>
// 						</div>
// 					</div>
				
// 				</div>
// 					<Piepagina />
// 			</div>
// 	);
// };

// export default Home;
