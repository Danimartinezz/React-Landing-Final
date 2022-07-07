import React from "react";

const Margin = {
    marginTop: "80px",
    marginBottom: "30px"
}
const Jumbotron = () => {
    let jumboText = {
        title: "A Warm Welcome!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        buttonLabel: "Call to action!",
        buttonURL: "#"
    };
    return (
        <div className="jumbotron bg-light" style={Margin}>
            <h1 className="display-4">{jumboText.title}</h1>
            <p className="lead">{jumboText.description}</p>
            <a className="btn btn-primary btn-lg" href={jumboText.buttonURL} role="button">
                {jumboText.buttonLabel}
            </a>
        </div>
    )
}
//END <Jumbotron />

export default Jumbotron



// const Jumbotron = () => {
// 	return (
//     <div className="jumbotron">
// 		<h1 className="display-4">A Warm Welcome!</h1>
// 		<p className="lead">
// 			Lorem Ipsum is simply dummy text of the printing and typesetting
// 			industry. Lorem Ipsum has been the industry standard dummy text ever
// 			since the 1500s
// 		</p>
// 		<a className="btn btn-primary btn-lg" href="#" role="button">
// 			Call to action!
// 		</a>
// 	</div>
// );
// };
// export default Jumbotron;


