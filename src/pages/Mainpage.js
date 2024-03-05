import React from "react";
import useFetch from "../hooks/useFetch";
import Products from "../components/Products/Products";

const Mainpage = ({ type }) => {
    const { data,error,loading } = useFetch(
        `/api/products?populate=*`
    );

    return (

        <div className="overflow-scroll  p-12">
            <div className="">
            {error
            ? "Something Went To Wrong"
            : loading
            ? "loading"
            : 
            
                    <Products className="" 
                    headingText="All Cars"
                     products={data} />
            
            }
            </div>
        </div>
    );
};

export default Mainpage;
