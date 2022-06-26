import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../components/Loader";

export default function Home() {
  const router = useRouter();

  setTimeout(function () {
    router.push("/cars");
  }, 500);

  return (
    <div className="text-2xl mt-11 font-semibold text-center">
      <h1 className="text-2xl">Welcome to Auto Deal Website</h1>
      <Loader />
   
    </div>
  );
}
