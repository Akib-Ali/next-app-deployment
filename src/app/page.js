import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import Link from "next/link";

async function productslist() {
  try {
      const responce = await axios.get("http://localhost:3000/api/products" )
      return responce.data.result


  } catch (error) {
      console.log(error)

  }
}


export default async function Home() {

 

const data = await productslist()
console.log("product list data", data)





return (
    <>
        <h1> All Products here</h1>

        <table border="1" style={{ width: "70%" }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((elem, index) => {
                    return (
                        <tr key={index}>
                            <td>{elem.name}</td>
                            <td>{elem.email}</td>
                            <td>{elem.age} </td>
                            <td>
                                <Link href={`products/${elem._id}`}> Update </Link>
                                
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>

  );
}
