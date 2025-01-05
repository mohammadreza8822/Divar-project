import { useQuery } from "@tanstack/react-query";

import Loader from "../modules/Loader.jsx";
import { getCategory } from "../../services/admin";

import styles from "./CategoryList.module.css";

function CategoryList() {
  const { data, isFetching } = useQuery(["get-categories"], getCategory);

  return (
    <div className={styles.list}>
      {isFetching ? (
        <Loader />
      ) : (
        data.data.map((item) => (
          <div key={item._id}>
            <img src={`${item.icon}.svg`} alt="" />
            <h5>{item.name}</h5>
            <p>slug: {item.slug}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
