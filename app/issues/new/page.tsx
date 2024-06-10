import dynamic from 'next/dynamic'
import issueFormSkeleton from './loading'

const IssueForm =dynamic(
  ()=>import('@/app/issues/_components/IssueForm'),{
    ssr:false,loading:()=><issueFormSkeleton/>
  }
  )


const NewIssuePage = () => {
  return (
    <IssueForm/>
  )
}

export default NewIssuePage