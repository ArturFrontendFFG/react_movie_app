import { useParams } from "react-router-dom";
import {useDetails} from '../../../hook/queries/useDetails'
export const QueryRequest = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useDetails(id);
    return { data, isLoading, isError, id };
  };