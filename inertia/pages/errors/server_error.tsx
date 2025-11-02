import { Link, router } from '@inertiajs/react'
import { LuMoveLeft, LuRefreshCw } from 'react-icons/lu'
import { Flex, Container, VStack, Heading, Text, Button, HStack } from '@chakra-ui/react'

export default function ServerError() {
  return (
    <Flex minH="100vh" minW="100vw" justify="center" alignItems="center">
      <Container maxW="breakpoint-sm">
        <VStack align="start">
          <Heading size="7xl">505</Heading>
          <VStack align="start" gap="8">
            <Heading>We&apos;ve Encountered an Unexpected Error.</Heading>
            <Text>
              We apologize for the inconvenience. Something went wrong on our end, and we were
              unable to complete your request.
              <br /> <br />
              Our team has been automatically notified and is working to resolve the issue.
            </Text>

            <HStack gap="6">
              <Button size="sm" variant="subtle" colorPalette="gray" asChild>
                <Link href="/" prefetch>
                  <LuMoveLeft />
                  Return home
                </Link>
              </Button>
              <Button size="sm" variant="subtle" onClick={() => router.reload()}>
                <LuRefreshCw />
                Try again
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Flex>
  )
}
