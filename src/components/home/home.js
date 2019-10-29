import React from 'react';
import { Link } from "react-router-dom"


const Home = () => {
	const quinze = {
		width: '15%'
	  }; 
	const quarante = {
		width: '15%'
	  }; 
	return (
		<div className="container">
			<div className="components">
				<div className="lunatic lunatic-component">
				
				<table className="table-lunatic">
					<tbody>
						<tr>
							<th style={quinze} colspan="1" rowspan="1">Unité enquêté</th>
							<th style={quinze} colspan="1" rowspan="1">Enquête</th>
							<th style={quarante} colspan="1" rowspan="1">Adresse</th>
							<th style={quarante} colspan="1" rowspan="1">Actions</th>
						</tr>
						<tr>
							<td style={quinze} colspan="1" rowspan="1">F00001</td>
							<td style={quinze} colspan="1" rowspan="1">Simpsons</td>
							<td style={quarante} colspan="1" rowspan="1">20 avenue de Paris, Lille</td>
							<td style={quarante} colspan="1" rowspan="1"><Link to="/questionnaire/simpsons">Accès au questionnaire</Link></td>
						</tr>
						<tr>
							<td style={quinze} colspan="1" rowspan="1">F00003</td>
							<td style={quinze} colspan="1" rowspan="1">Simpsons</td>
							<td style={quarante} colspan="1" rowspan="1">34 rue d'Arras, Lille</td>
							<td style={quarante} colspan="1" rowspan="1"><Link to="/questionnaire/simpsons">Accès au questionnaire</Link></td>
						</tr>
						<tr>
							<td style={quinze} colspan="1" rowspan="1">F00009</td>
							<td style={quinze} colspan="1" rowspan="1">Simpsons</td>
							<td style={quarante} colspan="1" rowspan="1">1 avenue de la liberté, Lille</td>
							<td style={quarante} colspan="1" rowspan="1"><Link to="/questionnaire/simpsons">Accès au questionnaire</Link></td>
						</tr>
					</tbody>

				</table>
				
				</div>
			</div>
		</div>
	);
}


export default Home;