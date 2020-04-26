import React from "react";

import RemoveFavorite from "./remove_favorite";
import "../page/homepage.styles.css";

export const FavoritesCard = ({ strain }) => {
	// console.log(strain)
	if (strain.type === "sativa") {
		return (
			<div className="card-container sativa">
				<div className="strain-card">
					<div>
						<h3>{strain.strain.toUpperCase()}</h3>
						<h6>{strain.type.toUpperCase()}</h6>
						<i>{strain.have_tried}</i>
						<i>{strain.personal_rating}</i>
						<p>{strain.notes}</p>
						{/* <p>{strain.id}</p> */}
						<RemoveFavorite  fid={strain.fid}/>
					</div>
				</div>
			</div>
		);
	} else if (strain.type === "hybrid") {
		return (
			<div className="card-container hybrid">
				<div className="strain-card">
					<div>
						<h3>{strain.strain.toUpperCase()}</h3>
						<h6>{strain.type.toUpperCase()}</h6>
						<i>{strain.have_tried}</i>
						<i>{strain.personal_rating}</i>
						<p>{strain.notes}</p>
						{/* <p>{strain.id}</p> */}
						<RemoveFavorite fid={strain.fid} />
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="card-container indica">
				<div className="strain-card ">
					<div>
						<h3>{strain.strain.toUpperCase()}</h3>
						<h6>{strain.type.toUpperCase()}</h6>
						<i>{strain.have_tried}</i>
						<i>{strain.personal_rating}</i>
						<p>{strain.notes}</p>
						{/* <p>{strain.id}</p> */}
						<RemoveFavorite fid={strain.fid} />
					</div>
				</div>
			</div>
		);
	}
};
