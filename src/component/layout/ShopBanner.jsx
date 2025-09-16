import React, { useEffect, useState } from "react";
import Container from "../Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

import axios from "axios";
import Product from "../Product";

const ShopBanner = () => {
  const [alldata, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8); // প্রতি পেজে কতগুলো প্রোডাক্ট দেখাবে

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    fetchData();
  }, []);

  // Pagination Logic
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = alldata.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(alldata.length / postPerPage);

  return (
    <>
      <div className="py-[120px]">
        <Container>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentPosts.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 
                 shadow-md p-4 transition-all duration-300 
                 hover:shadow-2xl hover:scale-105 hover:from-[#BCC7D9] hover:to-[#9CCCE1]"
              >
                <Product
                  productImg={item.thumbnail}
                  bdgText={"new"}
                  price={`$${item.price}`}
                  title={item.title}
                />
              </motion.div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-4 py-2 mt-7 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 mt-7 rounded ${
                  currentPage === i + 1
                    ? "bg-[#345C6E] text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 mt-7 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopBanner;
