import { useNavigate } from "react-router-dom";

export function useNavigation() {
  const navigation = useNavigate();
  return navigation;
}
