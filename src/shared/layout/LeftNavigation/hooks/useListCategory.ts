import { useState, useEffect } from "react";
import { listCategory } from "../api/listCategory";
import { ICategoryResponse } from "@/shared/interfaces/api/category";

export const useListCategory = () => {
  const [categoriesData, setCategoriesData] = useState<ICategoryResponse[]>([]);
  const [loadingRequest, setLoadingRequest] = useState(true);

  useEffect(() => {
    const fetchListCategory = async () => {
      try {
        setLoadingRequest(true);
        const res = await listCategory();

        setCategoriesData(res.data);
      } catch (err) {
        console.error("Erro ao carregar categorias:", err);
      } finally {
        setLoadingRequest(false);
      }
    };

    fetchListCategory();
  }, []);

  return {
    categoriesData,
    loadingRequest,
  };
};
