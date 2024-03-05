import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        // <div className="shop-by-category">
        //     <div className="categories">
        //         {categories?.data?.map((item) => (
        //             <div
        //                 key={item.id}
        //                 className="category"
        //                 onClick={() => navigate(`/category/${item.id}`)}
        //             >
        //                 <img
        //                     src={process.env.REACT_APP_STRIPE_APP_DEV_URL +
        //                         item.attributes.img.data[0].attributes.url}
        //                 />
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <div className="shop-by-category ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4   place-items-center">

                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className=""
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        {/* <img className="w-full"
                            src={process.env.REACT_APP_API_URL_UPLOAD +
                                item.attributes.img.data.attributes.url}
                            alt="not found img"
                        /> */}
                        
                        {/* <div> 
                            <h3>{item.attributes.title}</h3>
                            <p>{item.attributes.desc}</p>
                        </div> */}
                        <div class=" relative">
    <img className="h-[250px] rounded-sm"
    src={process.env.REACT_APP_STRIPE_APP_DEV_URL +
                             item.attributes.img.data[0].attributes.url} alt=""/>
    <div class="absolute bottom-0 px-4 py-3 bg-gray-500/50 w-full">
      <h1 class="text-white font-semibold text-4xl"> {item.attributes.title} </h1>
      <p class="text-gray-200">
      {item.attributes.desc}
      </p>
    </div>
</div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Category;
