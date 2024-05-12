"use client";
import { useRef, useState } from "react";
import Image from "next/image";

import styles from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
	const [pickedImage, setPickedImage] = useState();
	const imageInput = useRef();

	const handlePickClick = () => {
		imageInput.current.click();
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (!file) {
			setPickedImage(null);
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	};
	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{!pickedImage ? <p>No image picked yet.</p> : <Image src={pickedImage} alt="The image selected by the user" fill />}
				</div>
				<input
					onChange={handleImageChange}
					ref={imageInput}
					multiple
					className={styles.input}
					name={name}
					type="file"
					id={name}
					accept="image/png, image/jpeg, image/jpg"
				/>
				<button onClick={handlePickClick} className={styles.button} type="button">
					Pick an Image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
