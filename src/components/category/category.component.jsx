import CategoryItem from "../../components/category-item/category-item.component";

import "./category.styles.scss";

const Category = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Category;
