import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Issue } from '@prisma/client'
import { Box, Card, Heading, Text } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue}:{issue:Issue}) => {
  return (
    <Box>
        <Heading>{issue.title} </Heading>
        <div className='flex space-x-4 py-4'>
        <IssueStatusBadge status ={issue.status}/>
        <Text>{issue.createdAt.toDateString()}</Text>
        </div>
        <Card  className='prose max-w-full h-32' mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>

      </Box>
  )
}

export default IssueDetails