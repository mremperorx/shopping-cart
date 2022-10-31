import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./ImageSlider.css";



const ImageSlider = () => {
	const [current, setCurrent] = useState(0);
	const length = SliderData.length;

	
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	console.log(current)

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(SliderData) || SliderData.length <= 0) {
		return null;
	}
	return (
		<section className="slider">
			<FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
			{SliderData.map((data, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<>
								<img
									src={data.image}
									alt="fashion"
									className="slider-image"
								/>
								<div className="slider-text">
									<p>{data.text}</p>
									<div className="slider-btn">
										{index === length - 1}
									</div>
								</div>
							</>
						)}
					</div>
				);
			})}
			<FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
		</section>
	);
}

export default ImageSlider