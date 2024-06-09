import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import { Heading, Card } from '@radix-ui/themes';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactMarkdown from 'react-markdown';

const loading = () => {
  return (
    <div className='ml-6 max-w-xl'>
       <Skeleton/>
        <div className='flex space-x-4 py-4'>
       <Skeleton width ="5rem"/>
       <Skeleton width ="8rem"/>
        </div>
        <Card >
        <Skeleton count={3}/>
        </Card>

        
    </div>
  )
}

export default loading