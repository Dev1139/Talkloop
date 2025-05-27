import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup } from '../lib/api';


const useSignup = () => {
  const queryClient = useQueryClient();
  const {mutate, error, isPending} = useMutation({
    mutationFn: signup,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["authUser"]}); // It will refetch authUser
    }
  });

  return {signupMutation:mutate, error, isPending};
}

export default useSignup