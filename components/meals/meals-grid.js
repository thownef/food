import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
	return (
		<ul className={styles.meals}>
			{meals.map((item) => (
				<li key={item.id}>
					<MealItem {...item} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
