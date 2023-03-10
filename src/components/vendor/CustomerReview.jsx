import React, {useEffect} from "react";
import styles from "../../styles/VendorDash/Dashboard.module.css";
import { AiFillStar } from "react-icons/ai";
import { HiChatAlt2 } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import Customer from "../CustomerReview/Customer";
import { useDispatch, useSelector } from "react-redux"
import { getAllReviews } from "../../slices/admin/customerReview"



const CustomerReview = () => {
    const dispatch = useDispatch()
    const { data, isError, isLoading } = useSelector((state) => state.getReviews)

    useEffect(() => {
        dispatch(getAllReviews())
    }, [])

    console.log("data", data.reviews)

  return (
    <div className={styles.dashboard}>
      <div className={styles.topnav}>
        <p> / Transactions</p>
      </div>
      <div className={styles.moll}>
        <h1>Customer Reviews</h1>
        {/* <button style={{width: 168}} className={styles.thir}>Print Return Form</button> */}
      </div>
      <div className={styles.transs}>
        <div className={styles.inni}>
          <p>Ratings</p>
          <div className={styles.port}>
            <h1>4.2</h1>
            <div>
              {" "}
              <AiFillStar className={styles.spann} />{" "}
            </div>
          </div>
          <h4>73k Reviews</h4>
        </div>
        <div className={styles.inni}>
          <p>Comments</p>
          <div className={styles.port}>
            <h1>14k</h1>
            <div>
              {" "}
              <HiChatAlt2 className={styles.spann} />{" "}
            </div>
          </div>
          <h4>Customer Comments</h4>
        </div>
        <div className={styles.inni}>
          <p>Products</p>
          <div className={styles.port}>
            <h1>37k</h1>
            <div>
              {" "}
              <AiFillStar className={styles.spann} />{" "}
            </div>
          </div>
          <h4>Products Reviewed</h4>
        </div>
        <div className={styles.inni}>
          <p>Categories</p>
          <div className={styles.port}>
            <h1>5</h1>
            <div>
              {" "}
              <BiCategoryAlt className={styles.spann} />{" "}
            </div>
          </div>
          <h4>Categories Reviewed</h4>
        </div>
      </div>
      <div>
        <Customer reviews={data?.reviews} />
      </div>
    </div>
  );
};

export default CustomerReview;
