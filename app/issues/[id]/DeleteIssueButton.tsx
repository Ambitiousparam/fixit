'use client'
import Spinner from '@/app/components/spinner';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

 
const DeleteIssueButton = ({issueId}:{issueId:number}) => {
  const router = useRouter();
  const[error,seterror] = useState(false);
  const [isdeleting,setdeleting] = useState(false);

  const Deleteissue =async()=>{
    try {
      setdeleting(true)
      await axios.delete('/api/issues/'+ issueId);
      router.push('/issues/list')
      router.refresh();
      
    } catch (error) {
      setdeleting(false)
      console.log(error);
      seterror(true)  
    }

  }
  return (
    <>
    <AlertDialog.Root>
      <AlertDialog.Trigger>
      <Button  color="red" disabled={isdeleting}>
        Delete Issue
        {isdeleting && <Spinner/>}
      </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>
           Confirm Deletion
        </AlertDialog.Title>
        <AlertDialog.Description>
          Are you Sure you want to delete this issue?
        </AlertDialog.Description>
        <Flex mt="4" gap="6">
          <AlertDialog.Cancel>
            <Button  variant='soft' color="gray">Cancel</Button>
            
          </AlertDialog.Cancel>
          <AlertDialog.Action>
          <Button color="red" onClick={Deleteissue}
          >Delete issue</Button>
          </AlertDialog.Action>
          
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
    <AlertDialog.Root open={error}>
      <AlertDialog.Content>
        <AlertDialog.Title>Error</AlertDialog.Title>
        <AlertDialog.Description>This issue could not be deleted</AlertDialog.Description>
        <Button  mt ="5"color='red' variant='soft'onClick= {()=>seterror(false)}>OK</Button>
      </AlertDialog.Content>
    </AlertDialog.Root>
    </>
  )
}

export default DeleteIssueButton