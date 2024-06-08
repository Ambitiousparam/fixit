'use client';

import { TextField,Button, Text} from '@radix-ui/themes'
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import {useForm,Controller} from "react-hook-form"
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { Callout } from '@radix-ui/themes';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/ValidationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/spinner';
 




 type IssueForm = z.infer<typeof createIssueSchema>;


const NewIssuePage = () => {
  const router =useRouter();
  const[error,seterror] = useState('');
   const {register,control,handleSubmit,formState:{errors}} = useForm<IssueForm>({
    resolver:zodResolver(createIssueSchema)
   });
const [issubmitting,setsubmitting] =useState(false);
const onSubmit =handleSubmit(async (data)=>{

  try {
    setsubmitting(true);
    await axios.post('/api/issues',data);
    router.push("/issues")
    
  } catch (error) {
    setsubmitting(false);
    seterror('Details cannot be empty ')
    
  }

})


  return (    <div className='max-w-xl'>
     {error && 
      <Callout.Root  className='mb-5' color="red">
        <Callout.Text >
          {error}
        </Callout.Text>
      </Callout.Root>}
    <form className=' px-4  space-y-3' 
    onSubmit={onSubmit}>
        <TextField.Root>
            <TextField.Input placeholder ="Title" {...register('title')}  />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller 
        name ="description"
        control ={control}
        render={({field})=><SimpleMDE placeholder="Description" {...field}></SimpleMDE>

      }
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled ={issubmitting}>Submit New Issue {issubmitting && <Spinner/>}</Button>
    </form>
    </div>
  )
}

export default NewIssuePage