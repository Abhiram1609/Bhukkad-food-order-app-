import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Burger',
      description: 'Cheesy with vegetables',
      price: 80,
    },
    {
      id: 'm2',
      name: 'Farmhouse Pizza',
      description: 'Cheese chrust with extra toppings',
      price: 150,
    },
    {
      id: 'm3',
      name: 'Panner Butter Masala',
      description: 'Sweet Paneer dish',
      price: 180,
    },
    {
      id: 'm4',
      name: 'Tomato soup',
      description: 'Healthy...and Red...',
      price: 120,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem 
        key={meal.id} 
        id = {meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
    />));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;