import { useState, useEffect } from "react";
import { listCategory } from "../api/listCategory";
import { ICategoryResponse } from "@/shared/interfaces/api/category";
import { useAppStore } from "@/shared/zustand";

export const useListCategory = () => {
  const [categoriesData, setCategoriesData] = useState<ICategoryResponse[]>([]);
  const { setGlobalLoading, shouldRefetch } = useAppStore();

  const fetchListCategory = async () => {
    try {
      setGlobalLoading(true);
      const res = await listCategory();

      setCategoriesData(res.data);
    } catch (err) {
      console.error("Erro ao carregar categorias:", err);
    } finally {
      setGlobalLoading(false);
    }
  };

  useEffect(() => {
    fetchListCategory();
  }, [shouldRefetch]);

  return {
    categoriesData,
  };
};
