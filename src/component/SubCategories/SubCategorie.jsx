import axios from "axios";
import Loading from "../Loading/Loading";
import { useQuery } from "react-query";


export default function SubCategorie() {
  
  
  function getSubCategorie() {
    let Subcategorie = axios.get(
      `https://ecommerce.routemisr.com/api/v1/subcategories`
    );

    return Subcategorie;
  }

  let { data, isLoading } = useQuery("getSubCategorie", getSubCategorie, {
    cacheTime: 3000,
    refetchInterval: 5000,
  });
  

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="container my-5 ">
        <div className="row">
          <h1 className="text-main m-auto text-start ">Sub Categories </h1>

          {data?.data?.data.map((item) => (
            <div className="col-md-4 g-4 ">
              <div
                key={item._id}
                className="card mb-2 shadow-sm rounded product"
              >
                <div className="card-body">
                  <h4 className="card-text  fw-bolder">{item.name}</h4>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
