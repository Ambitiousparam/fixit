import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusBadge from "./components/IssueStatusBadge";

const LatestIssues = async () => {
  const latestissues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include:{
        assignedToUser:true
    }
  });

  return (
    <Card>

        <Heading size="4" mb="4">Latest Issues</Heading>


    <Table.Root>
      <Table.Body>
        {latestissues.map((latestissues) => (
          <Table.Row key={latestissues.id}>
            <Table.Cell>
              <Flex justify="between">
                <Flex direction="column" align="start" gap="2">
                  <Link href={`/issues/${latestissues.id}`}>
                    {latestissues.title}{" "}
                  </Link>
                  <IssueStatusBadge status={latestissues.status} />
                </Flex>
                {latestissues.assignedToUserId && (
                <Avatar src={latestissues.assignedToUser?.image!}
                fallback="?" 
                size="2"
                radius="full"  />
                )}
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </Card>
  );
};

export default LatestIssues;
