'use client';
import React from 'react'
import { TextField,TextArea,Button} from '@radix-ui/themes'


const NewIssuePage = () => {
  return (
    <div className=' px-4 max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder ="Title"/>

        </TextField.Root>
        <TextArea placeholder="Description"></TextArea>
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage