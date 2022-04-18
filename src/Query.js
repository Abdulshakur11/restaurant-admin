import { gql } from "@apollo/client";

const CATEGORIES = gql`
	query {
		getCategories {
			id
			category_name
		}
	}
`;

const NEW_CATEGORY = gql`
	mutation newCategory($category_name: String!) {
		newCategory(category_name: $category_name) {
			id
			category_name
		}
	}
`;

const ALLRESTAURANTS = gql`
	query {
		getAllRestaurants {
			id
			restaurant_name
		}
	}
`;

const RESTAURANTS = gql`
	query getRestaurants($categoryId: ID!) {
		getRestaurants(categoryId: $categoryId) {
			id
			restaurant_name
		}
	}
`;

const NEW_RESTAURANT = gql`
	mutation newRestaurant($restaurant_name: String!, $categoryId: ID!) {
		newRestaurant(restaurant_name: $restaurant_name, categoryId: $categoryId) {
			id
			restaurant_name
		}
	}
`;

const ALL_BRANCHES = gql`
	query {
		getAllBranches {
			id
			branche_name
		}
	}
`;

const BRANCHES = gql`
	query getBranches($restaurantId: ID!) {
		getBranches(restaurantId: $restaurantId) {
			id
			branche_name
		}
	}
`;

const NEW_BRANCHE = gql`
	mutation newBranch($branche_name: String!, $restaurantId: ID!) {
		newBranch(branche_name: $branche_name, restaurantId: $restaurantId) {
			id
			branche_name
			restaurantId
		}
	}
`;

const MENUS = gql`
	query getMenus($branchId: ID!) {
		getMenus(branchId: $branchId) {
			id
			food
			price
		}
	}
`;

const NEW_MENU = gql`
	mutation newMenu($food: String!, $price: Int!, $branchId: ID!) {
		newMenu(food: $food, price: $price, branchId: $branchId) {
			id
			food
			price
			branchId
		}
	}
`;

const GET_ORDERS = gql`
	query {
		getOrders {
			id
			username
			location
			phone_number
			food_name
			food_price
			food_count
			createdAt
		}
	}
`;

export {
	ALLRESTAURANTS,
	ALL_BRANCHES,
	//==========
	NEW_RESTAURANT,
	NEW_CATEGORY,
	NEW_BRANCHE,
	NEW_MENU,
	// =========
	RESTAURANTS,
	CATEGORIES,
	BRANCHES,
	GET_ORDERS,
	MENUS,
};
